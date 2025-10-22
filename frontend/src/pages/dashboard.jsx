import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/dashboard", { withCredentials: true })
  //     .then((res) => setMessage(res.data.message))
  //     .catch(() => navigate("/"));
  // }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/dashboard`, { withCredentials: true })
      .then((res) => setMessage(res.data.message))
      .catch(() => navigate("/"));
  }, []);

  const logout = async () => {
    // await axios.post("http://localhost:5000/api/logout", {}, { withCredentials: true });
    await axios.post(`${import.meta.env.VITE_API_URL}/api/logout`, {}, { withCredentials: true });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <header className="bg-white dark:bg-gray-800 shadow-md py-4 px-6 flex justify-between items-center relative">
        <h1 className="text-2xl font-semibold tracking-wide">
          Dashboard
        </h1>

        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white px-4 py-2 rounded transition-colors duration-300 mr-20"
        >
          Logout
        </button>
      </header>

      <main className="p-6">

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6 transition-colors duration-500">
          <h2 className="text-xl font-semibold mb-2">Selamat Datang 👋</h2>
          <p className="text-gray-600 dark:text-gray-300">
            {message || "Memuat data..."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-semibold mb-2">Statistik Pengguna</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Menampilkan data pengguna aktif.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-semibold mb-2">Transaksi Terakhir</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Menampilkan aktivitas transaksi terbaru.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-semibold mb-2">Notifikasi</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Tidak ada notifikasi baru.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
