from django.shortcuts import render,redirect
from django.http import HttpResponse
from .models import Profesor
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import LoginView


#@login_required
def asistencia(request):
    return render(request,'asistencia.html')

def is_staff(user):
    return (user.is_authenticated and user.is_superuser)


def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('menu')
        else:
            # Mostrar un mensaje de error de inicio de sesión
            return render(request, 'login.html', {'error': 'Credenciales inválidas'})
    else:
        return render(request, 'login.html')

def logout_view(request):
    logout(request)
    return redirect('login')
    
def menu(request):
    return render(request,'menu.html')

def cursos(request):
    return render(request,'cursos.html')

def notas(request):
    return render(request,'notas.html')

def anotaciones(request):
    return render(request,'anotaciones.html')

def donacion(request):
    return render(request,'Donacion.html')

def adminalumno(request):
    return render(request,'admin/adminalumno.html')

def adminasistencia(request):
    return render(request,'admin/adminasistencia.html')

def admincreacion(request):
    return render(request,'admin/admincreacion.html')

def adminprofesor(request):
    return render(request,'admin/adminprofesor.html')