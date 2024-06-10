from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers, status
import re
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
        exclude = ['last_login', 'is_superuser', 'is_staff', 'groups', 'user_permissions']
    def validate_first_name(self, value):
        if not value.isalpha():
            raise serializers.ValidationError("First name must contain only letters.")
        return value
    def validate_last_name(self, value):
        if not value.isalpha():
            raise serializers.ValidationError("Last name must contain only letters.")
        return value
    def validate_number(self, value):
        if not value.startswith('5'):
            raise serializers.ValidationError("Phone number must start with 5.")
        
        if not value.isdigit():
            raise serializers.ValidationError("Phone number must contain only integers.")
        
        if len(value) != 9:
            raise serializers.ValidationError("Phone number must be 9 characters long.")
        return value
    
    
    
    class UserPasswordSerializer(serializers.Serializer):
        password = serializers.CharField(
        max_length=1000)  
    
        confirm_password = serializers.CharField(
        max_length=1000)

    @staticmethod
    def validate_password(value):
        
        if len(value) < 8:
            raise serializers.ValidationError("Password must be at least 8 characters long.")
        if not re.search(r'[A-Z]', value):
            raise serializers.ValidationError("Password must contain at least one uppercase letter.")
        if not re.search(r'[a-z]', value):
            raise serializers.ValidationError("Password must contain at least one lowercase letter.")
        if not re.search(r'[0-9]', value):
            raise serializers.ValidationError("Password must contain at least one digit.")
        return value

    def validate(self, data):
        password = data.get('password')
        confirm_password = data.get('confirm_password')

        
        if password != confirm_password:
            raise serializers.ValidationError("Passwords do not match.")

        return data

    def create(self, validated_data):
        validated_data.pop('confirm_password') 
        validated_data['password'] = make_password(validated_data['password'])  
        return super().create(validated_data)


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = "__all__"
