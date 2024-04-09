import re
from rest_framework import serializers
from .models import User, Message
from django.contrib.auth.hashers import make_password


class UserLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'password']


class UserRegisterSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['name', 'number', 'email', 'password', 'confirm_password']

    def validate(self, data):
        password = data.get('password')
        if password != data.get('confirm_password'):
            raise serializers.ValidationError("The passwords do not match.")

        if len(password) < 8:
            raise serializers.ValidationError("The password is less than 8 characters.")

        if not re.search(r'[!@#$%^&*()_+{}|:"<>?~\-\[\];\',./]', password):
            raise serializers.ValidationError("The password must contain at least one special character.")

        if not re.search(r'\d', password):
            raise serializers.ValidationError("The password must contain at least one digit.")

        if not re.search(r'[A-Z]', password):
            raise serializers.ValidationError("The password must contain at least one uppercase letter.")

        return data

    def create(self, validated_data):
        validated_data.pop('confirm_password')
        validated_data['password'] = make_password(validated_data['password'])


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = "__all__"


