from drf_spectacular.generators import SchemaGenerator


class CustomSchemaGenerator(SchemaGenerator):
    def get_schema(self, request=None, public=False):
        schema = super().get_schema(request, public)

        schema['paths']['/auth/login']['post']['requestBody'] = {
            'required': True,
            'content': {
                'application/json': {
                    'schema': {
                        'type': 'object',
                        'properties': {
                            'email': {'type': 'string'},
                            'password': {'type': 'string'}
                        },
                        'required': ['email', 'password']
                    }
                }
            }
        }

        schema['paths']['/auth/register']['post']['requestBody'] = {
            'required': True,
            'content': {
                'application/json': {
                    'schema': {
                        'type': 'object',
                        'properties': {
                            'full_name': {'type': 'string'},
                            'email': {'type': 'string'},
                            'password': {'type': 'string'},
                            'number': {'type': 'string'}
                        },
                        'required': ['full_name', 'email', 'password', 'number']
                    }
                }
            },
            'responses': {
                '201': {
                    'description': 'User created',
                    'content': {'application/json': {}}
                },
                '400': {
                    'description': 'Bad request',
                    'content': {'application/json': {}}
                }
            }
        }

        return schema
