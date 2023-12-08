from rest_framework import serializers
from peoples.models import PeopleModel


class PeopleSerializer(serializers.ModelSerializer):
    class Meta:
        model = PeopleModel
        fields = '__all__'
        