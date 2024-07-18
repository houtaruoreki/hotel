from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from django.contrib.auth import get_user_model

User = get_user_model()

class UserRegistrationTestCase(APITestCase):
    
    def setUp(self):
        self.register_url = reverse('register')
        self.user_data = {
            'email': 'testuser@example.com',
            'number': '512345678',
            'username': 'testuser',
            'first_name': 'Test',
            'last_name': 'User',
            'password': 'Password123',
            'confirm_password': 'Password123'
        }

    def test_user_registration(self):
        response = self.client.post(self.register_url, self.user_data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 1)
        user = User.objects.get()
        self.assertEqual(user.email, self.user_data['email'])
        self.assertEqual(user.first_name, self.user_data['first_name'])
        self.assertEqual(user.last_name, self.user_data['last_name'])
        self.assertTrue(user.check_password(self.user_data['password']))

    def test_user_registration_password_mismatch(self):
        self.user_data['confirm_password'] = 'DifferentPassword123'
        response = self.client.post(self.register_url, self.user_data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('Passwords do not match.', response.data['non_field_errors'])

    def test_user_registration_invalid_first_name(self):
        self.user_data['first_name'] = 'Test123'
        response = self.client.post(self.register_url, self.user_data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('First name must contain only letters.', response.data['first_name'])

    def test_user_registration_invalid_last_name(self):
        self.user_data['last_name'] = 'User123'
        response = self.client.post(self.register_url, self.user_data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('Last name must contain only letters.', response.data['last_name'])

    def test_user_registration_invalid_number(self):
        self.user_data['number'] = '123456789'
        response = self.client.post(self.register_url, self.user_data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('Phone number must start with 5.', response.data['number'])

        self.user_data['number'] = '51234567a'
        response = self.client.post(self.register_url, self.user_data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('Phone number must contain only integers.', response.data['number'])

        self.user_data['number'] = '5123456789'
        response = self.client.post(self.register_url, self.user_data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('Ensure this field has no more than 9 characters.', response.data['number'])

    def test_user_registration_weak_password(self):
        self.user_data['password'] = 'weak'
        self.user_data['confirm_password'] = 'weak'
        response = self.client.post(self.register_url, self.user_data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('Password must be at least 8 characters long.', response.data['password'])

        self.user_data['password'] = 'Password'
        self.user_data['confirm_password'] = 'Password'
        response = self.client.post(self.register_url, self.user_data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('Password must contain at least one digit.', response.data['password'])

        self.user_data['password'] = 'password1'
        self.user_data['confirm_password'] = 'password1'
        response = self.client.post(self.register_url, self.user_data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('Password must contain at least one uppercase letter.', response.data['password'])

