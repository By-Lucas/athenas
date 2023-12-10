from django.db import models
from django.utils.translation import gettext_lazy as _

from helpers.base_models import BaseModelTimestamp
from helpers.validators import allow_only_words_validator


class PeopleModel(BaseModelTimestamp):
    SEX_CHOICES = (('M', 'M'),('F', 'F'))
    name = models.CharField(verbose_name=_("Nome"), max_length=200, validators=[allow_only_words_validator])
    birth_date = models.DateField(verbose_name=_("Data de nascimento"))
    cpf = models.CharField(verbose_name=_("CPF"), max_length=14)
    sex = models.CharField(verbose_name=_("Sexo"), max_length=1, choices=SEX_CHOICES)
    height = models.DecimalField(verbose_name=_("Altura"), max_digits=3, decimal_places=2)
    weight = models.DecimalField(verbose_name=_("Peso"), max_digits=9, decimal_places=2)
    
    def __str__(self) -> str:
        return self.name
    
    def calculate_ideal_weight(self):
        if self.sex == 'M':
            return round((72.7 * float(self.height)) - 58, 2)
        elif self.sex == 'F':
            return round((62.1 * float(self.height)) - 44.7, 2)
        else:
            return None
        
    class Meta:
        verbose_name = _("Pessoa")
        verbose_name_plural = _("Pessoas")
