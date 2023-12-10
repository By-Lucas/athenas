from rest_framework import serializers
from peoples.models import PeopleModel


class PeopleSerializer(serializers.ModelSerializer):
    class Meta:
        model = PeopleModel
        fields = ['id', 'name', 'birth_date', 'cpf', 'sex', 'height', 'weight', 'calculate_ideal_weight', 'created_date']
        