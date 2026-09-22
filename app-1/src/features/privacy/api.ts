import type { AxiosResponse } from "axios";

import { waitFor } from "@/lib/api/delay";
import { createMockResponse } from "@/lib/api/mock-response";

export type PrivacySection = {
  readonly title: string;
  readonly body: string;
};

const privacySections: readonly PrivacySection[] = [
  {
    title: "Responsable del tratamiento",
    body: "Esta política de privacidad se aplica a BRICKINVEST y a este sitio web. La entidad jurídica responsable es [INTRODUCIR LA ENTIDAD JURÍDICA DE BRICKINVEST]. Domicilio social: [INTRODUCIR EL DOMICILIO SOCIAL]. Número registral o fiscal: [INTRODUCIR EL NÚMERO REGISTRAL O FISCAL]. Contacto de privacidad: [INTRODUCIR EL EMAIL DE PRIVACIDAD]. Teléfono: [INTRODUCIR EL TELÉFONO DE PRIVACIDAD].",
  },
  {
    title: "Consentimiento y esta política",
    body: "Al utilizar este sitio web o enviar información, confirmas que has leído la política. Cuando sea necesario, BRICKINVEST solicitará tu consentimiento antes del tratamiento correspondiente. Las comunicaciones comerciales, las cookies, la analítica y otras actividades basadas en el consentimiento seguirán las opciones registradas mediante [INTRODUCIR EL MECANISMO DE CONSENTIMIENTO]. El consentimiento puede retirarse en cualquier momento mediante [INTRODUCIR EL PROCEDIMIENTO DE RETIRADA].",
  },
  {
    title: "Información solicitada y recopilada",
    body: "Según cómo interactúes con BRICKINVEST, los datos pueden incluir datos de contacto, contenido de la consulta, preferencias de inversión, información de uso del sitio, datos del dispositivo y registros, así como datos de consentimiento. Los campos y puntos de recopilación exactos son: [INTRODUCIR LAS CATEGORÍAS Y FUENTES DE DATOS CONFIRMADAS]. No envíes información innecesaria para tu consulta.",
  },
  {
    title: "Finalidades del tratamiento",
    body: "BRICKINVEST puede tratar la información para responder a consultas, evaluar y presentar oportunidades inmobiliarias o de inversión adecuadas, prestar los servicios solicitados, operar y proteger el sitio web, gestionar datos, cumplir obligaciones legales y medir el rendimiento del sitio cuando esté permitido. Operaciones de tratamiento adicionales: [INTRODUCIR LAS OPERACIONES DE TRATAMIENTO CONFIRMADAS].",
  },
  {
    title: "Base jurídica",
    body: "La base jurídica de cada actividad puede ser el consentimiento, las medidas adoptadas a petición tuya, la ejecución de un contrato, el cumplimiento de una obligación legal o un interés legítimo que no prevalezca sobre tus derechos. BRICKINVEST debe completar este mapa antes de la publicación: [INTRODUCIR LA TABLA DE OPERACIONES Y BASES JURÍDICAS].",
  },
  {
    title: "Conservación",
    body: "La información se conservará únicamente durante el tiempo necesario para la finalidad correspondiente y para los plazos legales, contables, de litigio o de prescripción aplicables. Los plazos o criterios específicos para cada categoría son: [INTRODUCIR LOS PLAZOS DE CONSERVACIÓN CONFIRMADOS].",
  },
  {
    title: "Destinatarios y transferencias internacionales",
    body: "La información puede compartirse con proveedores que actúen siguiendo las instrucciones de BRICKINVEST y, cuando sea necesario o esté permitido, con autoridades o asesores profesionales. Las categorías de encargados y proveedores de servicios en la nube son: [INTRODUCIR LOS ENCARGADOS / PROVEEDORES DE NUBE CONFIRMADOS]. Las transferencias internacionales y sus garantías son: [INTRODUCIR LOS DESTINOS Y GARANTÍAS CONFIRMADOS].",
  },
  {
    title: "Tus derechos",
    body: "Conforme a la legislación aplicable, puedes solicitar acceso, rectificación o supresión de tus datos, limitación y portabilidad del tratamiento, oponerte al tratamiento y retirar el consentimiento. Las solicitudes deben enviarse a [INTRODUCIR EL EMAIL O MÉTODO PARA EJERCER DERECHOS]. BRICKINVEST puede solicitar [INTRODUCIR EL REQUISITO DE VERIFICACIÓN DE IDENTIDAD] para proteger los datos personales. Los plazos y límites de respuesta se regirán por la legislación aplicable.",
  },
  {
    title: "Seguridad, cookies y analítica",
    body: "BRICKINVEST aplica medidas organizativas y técnicas adecuadas para proteger la información. Las medidas de seguridad confirmadas son: [INTRODUCIR LAS MEDIDAS DE SEGURIDAD]. Las categorías de cookies, las herramientas de analítica, las opciones de consentimiento y la conservación se describen en [INTRODUCIR LA POLÍTICA DE COOKIES / LOS DETALLES DEL CONSENTIMIENTO]. Configuración actual de analítica y etiquetas: [INTRODUCIR LAS PRÁCTICAS CONFIRMADAS].",
  },
  {
    title: "Reclamaciones, cambios y contacto",
    body: "Las preguntas o solicitudes pueden enviarse a [INTRODUCIR EL EMAIL DE PRIVACIDAD]. También puedes dirigirte a la autoridad de control competente: [INTRODUCIR LA AUTORIDAD Y LOS DATOS DE CONTACTO]. Fecha de entrada en vigor: [INTRODUCIR LA FECHA]. Última actualización: [INTRODUCIR LA FECHA DE ACTUALIZACIÓN]. Este borrador requiere revisión jurídica y operativa antes de su publicación, incluida la confirmación de todos los datos entre corchetes.",
  },
];

export const getPrivacySections = async (
  signal: AbortSignal,
): Promise<AxiosResponse<readonly PrivacySection[]>> => {
  await waitFor(500, signal);
  return createMockResponse(privacySections);
};
