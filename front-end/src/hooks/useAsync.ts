import { useEffect, useState } from "react";

// Executa uma função assíncrona (ex.: listarPedidos) e guarda o resultado.
// A função recebida deve ser estável (definida fora do componente).
export function useAsync<T>(fn: () => Promise<T>, inicial: T) {
  const [data, setData] = useState<T>(inicial);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ativo = true;
    fn().then((resultado) => {
      if (ativo) {
        setData(resultado);
        setLoading(false);
      }
    });
    return () => {
      ativo = false;
    };
  }, [fn]);

  return { data, loading };
}
