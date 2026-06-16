import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { AnimatedBars } from "@/components/ui/AnimatedBars";

export default function DataPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="py-16 md:py-24 relative overflow-hidden">
        <AnimatedBars />
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
          <div className="mb-12">
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              Política para el Tratamiento de Datos Personales
            </h1>
            <div className="w-20 h-2 bg-[#215BE1] rounded-full" />
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 md:p-12 shadow-sm">
            <div className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-gray-600 prose-p:leading-relaxed prose-ul:text-gray-600 prose-li:marker:text-[#215BE1] prose-strong:text-gray-900">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-gray-50 rounded-lg mb-8 text-sm">
                <div>
                  <p className="font-bold text-gray-900">Razón Social:</p>
                  <p>METROMAZDA SAS</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Nit:</p>
                  <p>900.262.357-2</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Dirección:</p>
                  <p>Carrera 50 # 40-64, Medellín – Antioquia</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Contacto:</p>
                  <p>Tel: 604-4445665 — Email: info@mhautopartes.com</p>
                </div>
              </div>

              <h2>Objeto</h2>
              <p>
                La presente Política de Tratamiento de Datos Personales tiene como finalidad establecer los criterios para la recolección, almacenamiento, uso, circulación y supresión de los datos personales tratados por METROMAZDA SAS, garantizando la protección de los derechos fundamentales de los titulares de la información, de conformidad con la Ley 1581 de 2012, el Decreto 1377 de 2013, el Decreto 1074 de 2015 y demás normas que las modifiquen o complementen.
              </p>
              <p>
                METROMAZDA SAS se compromete a proteger la información que cada uno de nuestros clientes nos proporciona porque entendemos la importancia de la privacidad y la seguridad de esta información. En cumplimiento a esta ley, METROMAZDA SAS, como responsable del tratamiento de los datos personales de proveedores, clientes y personal interno, establece una política para garantizar que la recolección y el tratamiento de datos personales se ajuste a los parámetros legales vigentes.
              </p>

              <h2>Alcance</h2>
              <p>
                Esta política aplica a todos los datos personales, información y archivos registrados en las Bases de Datos de proveedores, clientes, empleados o terceros, que sean recolectados, almacenados, utilizados, transmitidos o eliminados por METROMAZDA SAS en desarrollo de sus actividades comerciales.
              </p>

              <h2>Definiciones</h2>
              <ul>
                <li><strong>Dato Personal:</strong> Cualquier información vinculada o que pueda asociarse a una persona natural determinada o determinable.</li>
                <li><strong>Titular:</strong> Persona natural cuyos datos personales son objeto de tratamiento.</li>
                <li><strong>Tratamiento:</strong> Cualquier operación realizada sobre datos personales tales como recolección, almacenamiento, uso, circulación, actualización o supresión.</li>
                <li><strong>Responsable del Tratamiento:</strong> Persona jurídica que decide sobre la base de datos y/o el tratamiento de los datos.</li>
              </ul>

              <h2>Principios para el Tratamiento de Datos</h2>
              <ul>
                <li><strong>Finalidad:</strong> El tratamiento de datos debe estar orientado con una finalidad legítima, basado en la ley, y con conocimiento previo por el titular.</li>
                <li><strong>Transparencia:</strong> En el tratamiento de datos personales METROMAZDA SAS garantizará al titular el derecho de obtener información acerca de sus datos en cualquier momento y sin restricciones.</li>
                <li><strong>Veracidad:</strong> La información sujeta a tratamiento debe ser veraz, completa, exacta, actualizada, comprobable y comprensible. Se prohíbe el tratamiento de datos parciales, incompletos, fraccionados o que induzcan a error.</li>
                <li><strong>Confidencialidad:</strong> METROMAZDA SAS y todas las personas involucradas con el tratamiento de datos personales tienen la obligación de mantener en reserva los datos del titular, inclusive terminada el vínculo con la empresa o con el tratamiento de los datos personales.</li>
                <li><strong>Seguridad:</strong> La información sujeta a tratamiento por METROMAZDA SAS deberá ser manejada con las medidas necesarias para otorgar seguridad a los registros, evitando adulteración, pérdida, uso o acceso no autorizado.</li>
              </ul>

              <h2>Finalidades del Tratamiento</h2>
              <p>
                METROMAZDA SAS recolectará y tratará los datos personales únicamente para las siguientes finalidades:
              </p>

              <h3>Clientes y Proveedores</h3>
              <ul>
                <li>Elaboración y expedición de facturas de venta.</li>
                <li>Gestión de cartera y obligaciones comerciales.</li>
                <li>Atención de solicitudes, consultas, reclamos y garantías.</li>
                <li>Identificación de clientes para la correcta prestación de los servicios y comercialización.</li>
                <li>Cumplimiento de obligaciones legales, contables, tributarias y comerciales.</li>
                <li>Contacto con clientes para asuntos relacionados con compras, pedidos y cotizaciones.</li>
                <li>Desarrollar estrategias comerciales, marketing y fidelización.</li>
                <li>Realizar encuestas de satisfacción y actividades de mejora del servicio.</li>
                <li>Registrar y actualizar información de clientes y proveedores.</li>
                <li>Acceder, consultar y verificar información en bases de datos crediticias, judiciales o de seguridad.</li>
                <li>Cumplir con regulaciones en materia de prevención de lavado de activos y financiamiento del terrorismo.</li>
              </ul>

              <h3>Terceros</h3>
              <ul>
                <li>Llevar el control de las personas que ingresan a la empresa.</li>
                <li>El sistema de Gestión de la Seguridad y Salud en el Trabajo.</li>
                <li>Las videograbaciones se utilizarán para fines de seguridad de las personas, los bienes e instalaciones del responsable del Tratamiento.</li>
              </ul>

              <p className="font-semibold text-gray-900">METROMAZDA SAS no comercializa ni vende bases de datos personales.</p>

              <h2>Derechos de los Titulares</h2>
              <p>
                En el Tratamiento de Datos Personales por parte de METROMAZDA SAS se respetarán en todo momento los derechos de los titulares de Datos Personales que son:
              </p>
              <ul>
                <li>Tendrá acceso a la información con el fin de conocer, actualizar y verificar sus datos, el tratamiento aplicado a los mismos y su finalidad. Este derecho se podrá ejercer, entre otros frente a datos parciales, inexactos, incompletos, fraccionados, que induzcan a error, o aquellos cuyo Tratamiento esté expresamente prohibido o no haya sido autorizado.</li>
                <li>Solicitar prueba de la autorización otorgada a METROMAZDA SAS.</li>
                <li>Presentar quejas por infracciones a lo dispuesto por la ley frente a las autoridades competentes.</li>
                <li>Revocar la autorización y/o solicitar la supresión del dato cuando en el tratamiento no se respeten los principios, derechos y garantías constitucionales y legales, mediante la presentación de un reclamo frente a la autoridad competente.</li>
                <li>Acceder en forma gratuita a sus datos personales que hayan sido objeto de tratamiento.</li>
              </ul>

              <h2>Autorización del Titular</h2>
              <p>
                METROMAZDA SAS solicitará la autorización previa, expresa e informada de los titulares antes de realizar el tratamiento de sus datos personales, salvo las excepciones contempladas en la ley. La autorización podrá obtenerse por medios físicos, electrónicos, telefónicos o mediante cualquier mecanismo que permita su posterior consulta.
              </p>

              <h2>Datos Sensibles</h2>
              <p>
                METROMAZDA SAS no recolecta ni trata datos sensibles como regla general. En caso de requerirse excepcionalmente, se informará previamente al titular que no está obligado a suministrarlos y se solicitará autorización expresa.
              </p>

              <h2>Procedimiento para Consultas y Reclamos</h2>
              <p>
                Para realizar peticiones, consultas y reclamos por parte de los titulares de los datos personales que se encuentre bajo tratamiento de METROMAZDA SAS, y hacer uso de sus derechos de conocer, actualizar, rectificar y suprimir datos, o revocar la autorización, los titulares podrán ejercer sus derechos mediante solicitud enviada a:
              </p>
              <div className="p-4 bg-gray-50 rounded-lg not-prose">
                <p className="text-sm">
                  <span className="font-semibold">Correo electrónico:</span> info@mhautopartes.com<br />
                  <span className="font-semibold">Línea telefónica:</span> (604) 444 56 65 ext 102
                </p>
              </div>

              <h3>Consultas</h3>
              <p>
                Las consultas serán atendidas dentro de los diez (10) días hábiles siguientes a su recepción. Cuando no sea posible atender la consulta dentro de dicho término, se informará al interesado indicando los motivos de la demora y la fecha en que se atenderá, la cual no podrá superar cinco (5) días hábiles adicionales.
              </p>

              <h3>Reclamos</h3>
              <p>
                Los reclamos serán atendidos dentro de los quince (15) días hábiles siguientes a su recepción. Cuando no sea posible atender el reclamo dentro de dicho término, se informará al interesado indicando los motivos de la demora y la fecha en que se atenderá, la cual no podrá superar ocho (8) días hábiles adicionales.
              </p>

              <h2>Seguridad de la Información</h2>
              <p>
                METROMAZDA SAS implementará medidas técnicas, humanas y administrativas razonables para proteger los datos personales contra pérdida, uso indebido, acceso no autorizado, alteración o divulgación.
              </p>

              <h2>Deberes de METROMAZDA SAS</h2>
              <p>
                En calidad de responsable del tratamiento de los datos personales, METROMAZDA SAS se compromete a cumplir con los siguientes deberes:
              </p>
              <ul>
                <li>Garantizar al titular de la información, en todo tiempo, el pleno y efectivo ejercicio del derecho de hábeas data.</li>
                <li>Conservar copia de la respectiva autorización otorgada por el titular.</li>
                <li>Informar debidamente al titular sobre la finalidad de la recolección y los derechos que le asisten por virtud de la autorización otorgada.</li>
                <li>Conservar la información bajo las condiciones de seguridad necesarias para impedir su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento.</li>
                <li>Garantizar que la información que se suministre sea veraz, completa, exacta, comprobable y comprensible.</li>
                <li>Tramitar consultas, reclamos y solicitudes formulados en los términos señalados por la ley.</li>
                <li>Mantener en todo momento las condiciones de seguridad y privacidad de la información del titular.</li>
                <li>Informar, a solicitud del titular, sobre el uso de sus datos.</li>
                <li>Informar a la autoridad de protección de datos cuando se presenten violaciones a los códigos de seguridad y existan riesgos en la administración de la información de los Titulares.</li>
                <li>Cumplir las instrucciones y requerimientos que imparta la Superintendencia de Industria y Comercio.</li>
              </ul>

              <h2>Vigencia</h2>
              <p>
                La presente Política de Tratamiento de Datos Personales rige a partir de su publicación. Los datos personales serán conservados únicamente durante el tiempo necesario para cumplir las finalidades descritas y las obligaciones legales aplicables en materia comercial, tributaria, contable y de atención al cliente.
              </p>

              <h2>Modificaciones</h2>
              <p>
                METROMAZDA SAS se reserva el derecho de modificar esta política en cualquier momento. Cualquier cambio sustancial será informado a los titulares a través de los canales habituales de comunicación de la empresa.
              </p>

              <div className="mt-12 pt-8 border-t border-gray-200 not-prose">
                <p className="font-bold text-gray-900">Aprobada por:</p>
                <div className="mt-6 space-y-1 text-sm text-gray-600">
                  <p className="font-bold text-gray-900">YUDY MARCELA HERNANDEZ GARCIA</p>
                  <p>Representante legal</p>
                  <p>METROMAZDA SAS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
