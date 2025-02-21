import { Navigate } from "react-router-dom";

const RedirigirPorRol = ({ usuario }) => {
  if (!usuario) {
    return <Navigate to="/" replace />; // Si no hay usuario, lo manda al login
  }

  switch (usuario.rol) {
    case "admin":
      return <Navigate to="/admin" replace />;
    case "policia":
      return <Navigate to="/policia" replace />;
    default:
      return <Navigate to="/" replace />; // Si el rol no es válido, también lo manda a login
  }
};

export default RedirigirPorRol;
