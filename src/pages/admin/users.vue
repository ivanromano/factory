<!-- quiero hacer recaptcha con nuxt y django. google me dio el codigo para obtener el token y funciona
 
ademas, me dio un codigo en python, pero no funciona 
-->
<template>
  <!-- <NuxtPage></NuxtPage> -->
  <!-- <AdminUsersList></AdminUsersList> -->
  <AdminList @edit="setUser" @delete="deleteUser" :obj="users" />


  <button @click="onClick" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Enviar</button>
</template>




<script setup>
import { useStore } from "../../store/store";
const store = useStore();

const users = ref(await store.getAllUsers());




function setUser(item) {
  const formdata = new FormData();
  formdata.append('id', item.id);
  formdata.append('first_name', item.first_name);
  formdata.append('bio', item.bio);
  formdata.append('fdp', item.fdp);
  formdata.append('is_staff', item.is_staff);


  store.AdminEditUser(formdata);
}

function deleteUser(slug) {
  // store.AdmindeleteUserPost(slug)
}









async function onClick(e) {
  e.preventDefault();
  grecaptcha.enterprise.ready(async () => {
    const token = await grecaptcha.enterprise.execute('6Lfyk28qAAAAAHdArqC_QJb4gBggAnDpldFi9d6j', { action: 'LOGIN' });
    
    try {
      const response = await fetch(store.api + 'user/verificar-recaptcha/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }

      const data = await response.json();
      console.log('Respuesta del servidor:', data);

    } catch (error) {
      console.error('Error al procesar la respuesta:', error);
    }
  });
}



useHead({
  titleTemplate: 'users',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description' }
  ],
  script: [
    {
      src: "https://www.google.com/recaptcha/enterprise.js?render=6Lfyk28qAAAAAHdArqC_QJb4gBggAnDpldFi9d6j",
    }
  ]
});
</script>

<!-- 
este es el codigo python. quiero que este en view.py y que sea una vista. debo poder acceder a la vista con un fetch desde nuxt

from google.cloud import recaptchaenterprise_v1
from google.cloud.recaptchaenterprise_v1 import Assessment

def create_assessment(
    project_id: str, recaptcha_key: str, token: str, recaptcha_action: str
) -> Assessment:
    """Crea una evaluación para analizar el riesgo de una acción de la IU.
    Args:
        project_id: El ID del proyecto de Google Cloud.
        recaptcha_key: La clave reCAPTCHA asociada con el sitio o la aplicación
        token: El token generado obtenido del cliente.
        recaptcha_action: El nombre de la acción que corresponde al token.
    """

    client = recaptchaenterprise_v1.RecaptchaEnterpriseServiceClient()

    # Establece las propiedades del evento para realizar un seguimiento.
    event = recaptchaenterprise_v1.Event()
    event.site_key = recaptcha_key
    event.token = token

    assessment = recaptchaenterprise_v1.Assessment()
    assessment.event = event

    project_name = f"projects/{project_id}"

    # Crea la solicitud de evaluación.
    request = recaptchaenterprise_v1.CreateAssessmentRequest()
    request.assessment = assessment
    request.parent = project_name

    response = client.create_assessment(request)

    # Verifica si el token es válido.
    if not response.token_properties.valid:
        print(
            "The CreateAssessment call failed because the token was "
            + "invalid for the following reasons: "
            + str(response.token_properties.invalid_reason)
        )
        return

    # Verifica si se ejecutó la acción esperada.
    if response.token_properties.action != recaptcha_action:
        print(
            "The action attribute in your reCAPTCHA tag does"
            + "not match the action you are expecting to score"
        )
        return
    else:
        # Obtén la puntuación de riesgo y los motivos.
        # Para obtener más información sobre cómo interpretar la evaluación, consulta:
        # https://cloud.google.com/recaptcha-enterprise/docs/interpret-assessment
        for reason in response.risk_analysis.reasons:
            print(reason)
        print(
            "The reCAPTCHA score for this token is: "
            + str(response.risk_analysis.score)
        )
        # Obtén el nombre de la evaluación (ID). Úsalo para anotar la evaluación.
        assessment_name = client.parse_assessment_path(response.name).get("assessment")
        print(f"Assessment name: {assessment_name}")
    return response


-->