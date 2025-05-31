export default function About() {
  return (
    <section id="sobre" className="xl:flex xl:gap-8">
      <div className="flex flex-col items-center xl:items-start text-center xl:text-start justify-center space-y-2 xl:space-y-4">
        <hr className="w-10 border border-red-500" />
        <h4 className="text-gray">Bem-vindo à GMD Bus</h4>
        <h2 className="w-72 md:w-auto">
          15 anos de excelência no transporte coletivo
        </h2>
        <p className="md:w-2xl xl:w-xl">
          Somos referência nacional na compra e venda de micro-ônibus
          multimarcas. Desde 2011, entregamos veículos com procedência
          garantida, atendimento direto e negociação transparente.
        </p>
        <p className="md:w-xl xl:w-lg">
          Aqui, você encontra mais do que um ônibus: encontra parceria,
          confiança e soluções pensadas para quem vive do transporte.
        </p>
      </div>
      <div className="mt-8 flex gap-2 w-full h-96">
        <div
          className="relative rounded-lg w-[50%] h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('/transport-tourism-road-trip-people-concept-group-happy-passengers-boarding-travel-bus.jpg')",
          }}
        >
          <div className="rounded-lg absolute inset-0 w-full h-full bg-blue/50"></div>
        </div>
        <div className="flex flex-col gap-2 w-[50%] h-full">
          <div
            className="relative rounded-lg w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('/tourist-buses-parking-sunrise-sunset.jpg')",
            }}
          >
            <div className="rounded-lg absolute inset-0 w-full h-full bg-blue/50"></div>
          </div>
          <div
            className="relative rounded-lg w-full h-full bg-center bg-cover"
            style={{ backgroundImage: "url('/interior-bus.jpg')" }}
          >
            <div className="rounded-lg absolute inset-0 w-full h-full bg-blue/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
