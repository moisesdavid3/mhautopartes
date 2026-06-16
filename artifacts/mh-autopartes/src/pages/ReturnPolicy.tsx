import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { AnimatedBars } from "@/components/ui/AnimatedBars";

export default function ReturnPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="py-16 md:py-24 relative overflow-hidden">
        <AnimatedBars />
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
          <div className="mb-12">
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              Política de Devoluciones y Garantías
            </h1>
            <div className="w-20 h-2 bg-[#215BE1] rounded-full" />
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 md:p-12 shadow-sm">
            <div className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-gray-600 prose-p:leading-relaxed prose-ul:text-gray-600 prose-li:marker:text-[#215BE1] prose-strong:text-gray-900">
              <h2>Objetivo</h2>
              <p>
                Comunicar a nuestros clientes las políticas y procesos de devoluciones y garantías, entregando la información necesaria y las soluciones respectivas, con el fin de respetar sus derechos como consumidores y mantener nuestras relaciones con los clientes durante el tiempo.
              </p>
              <p>
                Nuestra empresa trabaja día a día por mejorar su servicio y tener personal calificado para atender cada una de las solicitudes que el cliente requiera. Estamos abiertos a escuchar sus opiniones positivas y por mejorar, además dar solución aquellas situaciones que generen inconformidad.
              </p>
              <p>
                La siguiente política establece los términos y condiciones para devoluciones, cambios y garantías de nuestros productos basados en la <strong>Ley 1480 de 2011</strong>.
              </p>

              <h2>Condiciones para solicitar la garantía</h2>
              <ul>
                <li>El producto debe presentar una falla de fabricación o no cumplir con las características descritas.</li>
                <li>El producto debe ser presentado en su empaque original, con todos sus accesorios y verificar el registro de compra.</li>
                <li>La solicitud de garantía debe realizarse dentro del plazo establecido en la garantía legal o comercial.</li>
                <li>El producto no debe presentar daños causados por mal uso, accidentes o desgaste natural.</li>
              </ul>

              <h2>Devoluciones por otras causas</h2>
              <p>
                Nuestra empresa podrá aceptar devoluciones por otras causas, como error en el envío o cambio del cliente, siempre y cuando se cumplan las siguientes condiciones:
              </p>
              <ul>
                <li>El producto deberá encontrarse en perfectas condiciones como fue despachado con sellos, empaques, manuales, accesorios originales y marcados para así proceder de nuevo a su venta.</li>
                <li>La solicitud de devolución debe realizarse dentro de los 2 días hábiles siguientes a la venta.</li>
                <li>Los costos de envío para la devolución correrán por cuenta del cliente, a menos que el error sea atribuible a nuestra empresa.</li>
                <li>No tienen devolución el producto que haya sido solicitado sobre pedido especial (compras por encargo o productos en promoción).</li>
              </ul>

              <h2>Procedimiento para solicitar la garantía</h2>
              <ol>
                <li><strong>Notificación:</strong> El cliente debe notificar a nuestra empresa sobre la falla del producto a través de los canales de atención, números telefónicos o presencial.</li>
                <li><strong>Revisión:</strong> Nuestra empresa evaluará la solicitud de garantía y verificará si cumple con los requisitos establecidos.</li>
                <li><strong>Solución:</strong> Dependiendo del caso, nuestra empresa podrá reparar el producto, reemplazarlo por uno nuevo o devolver el dinero al cliente.</li>
              </ol>

              <h2>Proceso detallado de reclamos y garantías</h2>

              <ol>
                <li>
                  Acercarse a uno de nuestros puntos de venta para manifestar el caso de devolución o garantía, también puede hacer uso de la comunicación telefónica para iniciar el proceso.
                </li>
                <li>
                  Al momento de iniciar una devolución o gestionar una garantía, la persona encargada de ventas y nuestra área de bodega gestionará todo el proceso de la devolución y de los documentos correspondientes:
                  <ul>
                    <li><strong>A.</strong> Si es un error al momento de vender el producto, inmediatamente se le hará el cambio y su respectiva documentación, siempre y cuando el producto esté en óptimas condiciones, empaques y accesorios completos.</li>
                    <li><strong>B.</strong> En caso de una devolución por razones personales del cliente, se debe tener presente que pasado 2 días no se devuelve dinero, se genera nota con saldo a favor; después de 5 días no se aceptan devoluciones. Los productos deben estar completos con sus respectivas piezas y sus empaques en buenas condiciones.</li>
                    <li><strong>C.</strong> En caso de ser un daño generado al momento del montaje o al momento de manipulación, se recibirá el producto y se hará la respectiva revisión técnica, encontrando las causas reales del daño. Dependiendo del diagnóstico se dará respuesta a la garantía. El tiempo de respuesta varía del tipo de producto sin exceder los tiempos máximos por ley.</li>
                    <li><strong>D.</strong> Mientras se realiza el diagnóstico se da la opción al cliente de facturar un nuevo producto mientras se realiza la revisión técnica del producto. En caso de que se apruebe la garantía se realiza la devolución del dinero, cambio de producto o un saldo a favor para una próxima compra. Ningún funcionario de la compañía está autorizado para cambios mano a mano.</li>
                    <li><strong>E.</strong> Es importante tener presente que en los procesos de garantías nunca se dará una respuesta negativa inmediatamente, ya que como empresa siempre analizamos cada caso, para dar una solución basada en el respectivo estudio de cada situación.</li>
                    <li><strong>F.</strong> Siempre que el cliente entregue un producto para devolución o garantía se debe entregar un documento físico de la compañía con el cual el cliente podrá hacer seguimiento. El cliente debe estar registrado con todos sus datos para iniciar el proceso de la garantía.</li>
                    <li><strong>G.</strong> El tiempo de revisión es aproximadamente de 15 días hábiles dependiendo del tipo de revisión técnica que se deba realizar. En caso que este tiempo pueda extenderse se le avisaría al cliente.</li>
                  </ul>
                </li>
                <li>
                  Para los procesos de devolución o garantía es importante tener clara la información de la fecha de la venta (por esta razón siempre recomendamos ser registrados en el sistema para mejorar este proceso de post-venta), además el producto debe tener la marca que lo identifica como un producto vendido en una de nuestras sucursales.
                </li>
                <li>
                  La administración siempre estará encargada de velar por el seguimiento de cada proceso con el objetivo de dar respuesta oportuna a cada cliente.
                </li>
                <li>
                  Se cuenta con una persona encargada de todo el tema de facturación, devoluciones y saldos a favor. En caso de tener alguna duda sobre el proceso del producto, se puede comunicar al <strong>4445665 ext 102</strong> — Auxiliar administrativa.
                </li>
                <li>
                  El departamento de cartera estará también vigilando el proceso de devolución o garantía en caso de ser un producto facturado a crédito, además de realizar los respectivos documentos y cruces de saldos.
                </li>
                <li>
                  Contamos con buzón de sugerencias en el correo <strong>info@mhautopartes.com</strong> con el objetivo de recibir retroalimentación por parte de los clientes. Nuestro equipo está pendiente de vigilar todo el proceso de compra y satisfacción del cliente.
                </li>
              </ol>

              <h2>Recomendaciones con productos específicos</h2>
              <p>A continuación se notifican los siguientes productos y su manejo específico frente al respaldo de garantías:</p>

              <ul>
                <li><strong>Amortiguadores:</strong> Tienen una garantía de 6 meses por defecto de fábrica siempre y cuando lleve la pareja de amortiguadores. Al momento de un proceso de garantía el amortiguador no puede estar golpeado y el émbolo del amortiguador no puede estar rayado.</li>
                <li><strong>Baterías:</strong> Tienen garantía de 6 meses en taxis y 12 meses en particular. Al momento de un proceso de garantía se debe presentar las revisiones de cada dos meses en la energética del distribuidor.</li>
                <li><strong>Amortiguadores, baterías y radiadores:</strong> Se debe dejar el producto instalado en el vehículo para su revisión técnica en los talleres que tienen convenio con la empresa.</li>
                <li><strong>Radiadores:</strong> Tienen 3 meses de garantía siempre y cuando no se presente daño en los tanques y se use refrigerante.</li>
                <li><strong>Kits clutch:</strong> Tienen 3 meses de garantía por imperfecto de fábrica.</li>
                <li><strong>Soportes:</strong> Tienen garantía de 3 meses siempre y cuando se lleve el juego completo. Si solo lleva un soporte se da un respaldo de instalación.</li>
                <li><strong>Parte eléctrica:</strong> El producto no tiene cambio ni garantía, ya que es un producto que fácilmente puede ser dañado en su instalación si no se hace de la manera correcta. Para una garantía eléctrica se debe mostrar que el producto no funcionó en la instalación.</li>
              </ul>

              <h2>Exclusión de la garantía</h2>
              <p>La garantía no cubre daños causados por:</p>
              <ul>
                <li>Mal uso o abuso del producto.</li>
                <li>Conexión a fuentes de energía incorrectas.</li>
                <li>Modificaciones o reparaciones realizadas.</li>
                <li>Desgaste natural por el uso.</li>
                <li>Piezas averiadas o defectuosas.</li>
                <li>Causas externas como golpes, humedad, etc.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
