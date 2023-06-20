from django import forms
from .models import Administrador, Apoderado, Estudiante, Asistencia, Nota, Anotacion, Profesor, Colegio


class AdministradorForm(forms.ModelForm):
    class Meta:
        model = Administrador
        fields = ['username', 'password', 'admin_id', 'telefono', 'cargo']


class ApoderadoForm(forms.ModelForm):
    class Meta:
        model = Apoderado
        fields = ['nombre', 'direccion', 'telefono', 'correo']


class EstudianteForm(forms.ModelForm):
    class Meta:
        model = Estudiante
        fields = ['nombre', 'fecha_nacimiento', 'genero', 'direccion', 'telefono', 'correo']


class AsistenciaForm(forms.ModelForm):
    class Meta:
        model = Asistencia
        fields = ['estudiante', 'fecha', 'presente']


class NotaForm(forms.ModelForm):
    class Meta:
        model = Nota
        fields = ['estudiante', 'asignatura', 'valor', 'fecha', 'tipo_evaluacion', 'profesor']


class AnotacionForm(forms.ModelForm):
    class Meta:
        model = Anotacion
        fields = ['estudiante', 'fecha', 'mensaje', 'remitente', 'asunto']


class ProfesorForm(forms.ModelForm):
    class Meta:
        model = Profesor
        fields = ['nombre', 'especialidad', 'correo']


class ColegioForm(forms.ModelForm):
    class Meta:
        model = Colegio
        fields = ['nombre', 'direccion', 'telefono', 'email', 'director', 'estudiantes']
