# Hotel API

Welcome to the API documentation for our charming village hotel. Explore our endpoints to discover the range of services and amenities we offer to make your stay unforgettable.

## OpenAPI Info

- Version: 1.0.0
- OpenAPI Version: 3.0.3

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/houtaruoreki/hotel.git

2. Change directory:
    ```bash
    cd ./backend

3. Install dependencies:
    ```bash
   pip install -r requirements.txt

4. Make migrations:
    ```bash
   python3 manage.py runserver

5. Apply database migrations:
   ```bash
   python3 manage.py migrate

6. Run the server:
   ```bash
   python3 manage.py runserver

## Endpoints

For detailed information about endpoints, visit:

- `/docs`: API documentation generated with ReDoc.
- `/api`: API documentation generated with Swagger UI.


## Booking System

### 1. Model
```python
class Booking(models.Model):
   room = models.ForeignKey(Room, on_delete=models.CASCADE)
   user = models.ForeignKey("user.user", on_delete=models.CASCADE)
   checkin_time = models.DateTimeField()
   checkout_time = models.DateTimeField()
   guests = models.IntegerField(default=0)
   total_price = models.FloatField(default=0)
   status = models.CharField(default="pending", max_length=10)
```

### 2. Serializer
```python
class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        exclude = ['total_price']

    def create(self, validated_data):
        room = validated_data['room']
        checkin_new = validated_data['checkin_time']
        checkout_new = validated_data['checkout_time']
        if room and room.status != 1:
            booking = Booking.objects.filter(room=room).order_by('-id')[0]
            if checkin_new >= booking.checkin_time:
                if checkout_new > booking.checkout_time:
                    overlap = f"{checkin_new} - {booking.checkout_time}"
                    available = f"{booking.checkout_time} - {checkout_new}"
                    raise serializers.ValidationError({'overlap': overlap,
                                                       'available': available})
                else:
                    raise serializers.ValidationError("Room is not available in that period")
        return Booking.objects.create(**validated_data)

    def update(self, instance, validated_data):
        room = instance.room
        status = validated_data['status']
        if status == 'confirmed':
            room.status = 0
            room.save()
        elif status == 'canceled':
            instance.delete()
        return super().update(instance, validated_data)


class BookingListSerializer(serializers.ListSerializer):
    class Meta:
        model = Booking
        fields = '__all__'
```

### 3. Views
```python
class BaseBookingView:
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [AllowAny]

class BookingListView(BaseBookingView, generics.ListAPIView):
    pass


class BookingView(BaseBookingView, generics.CreateAPIView):
    pass


class BookingStatusUpdateView(BaseBookingView, generics.UpdateAPIView):
    pass


class BookingDeleteView(BaseBookingView, generics.DestroyAPIView):
    pass
```

## How booking works
- **Creating a Booking**: Send a POST request to `/booking/add/` with necessary data including `room`, `user`, `checkin_time`, `checkout_time`, and `guests`. The system will check if the room is available for the given period. If not, it will return an error specifying the conflicting period.

- **Updating a Booking**: Send a PUT or PATCH request to `/booking/{id}/update` with updated data. If the booking status is changed to 'confirmed', the room status will be updated accordingly.

- **Deleting a Booking**: Send a DELETE request to `/booking/{id}/delete/` to cancel a booking.
