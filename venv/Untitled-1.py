
!pip install mysql-connector-python

import mysql.connector
from mysql.connector import Error

try:
    conexion = mysql.connector.connect(
        host='localhost',
        user='bonillahermes',
        password='AnsHyp12$',
        database='contactos_web'
    )

    if conexion.is_connected():
        print('Conexión exitosa.')
except Error as e:
    print(f'Error al conectar a la base de datos: {e}')
finally:
    if conexion and conexion.is_connected():
        conexion.close()
        print('Conexión cerrada.')
