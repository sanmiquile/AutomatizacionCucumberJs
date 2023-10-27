
Feature: Registro de usuario
    El usuario puede realizar su registro exitosamente
    Scenario: Registro exitoso
        Given soy un usuario no registrado
        When ingreso mis datos de afiliacion y me registro
        Then muestra mensaje de "Operación completada"

    Scenario: Registro existente
        Given soy un usuario registrado en SMS
        When ingreso mis datos de afiliacion y me registro
        Then muestra mensaje de "Existing registration"