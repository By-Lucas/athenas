# Generated by Django 5.0 on 2023-12-08 01:08

import helpers.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('peoples', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='peoplemodel',
            name='name',
            field=models.CharField(max_length=200, validators=[helpers.validators.allow_only_words_validator], verbose_name='Nome'),
        ),
    ]