Feature: Inicio de sesion
    El usuario puede ingresar a la pagina con sus credenciales
    Scenario: Inicio de sesion exitoso
    Given soy un usuario que ya esta registrado
    When accedo con mis credenciales de logueo
    Then debo estar en el Home

