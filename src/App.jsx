import { useState } from "react";
import { AiOutlineFileText } from "react-icons/ai";
import { motion } from "framer-motion";
import { FaHome, FaCog, FaInfoCircle } from "react-icons/fa";

export default function App() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setCode(e.target.result);
      reader.readAsText(file);
    }
  };

  const handleProcess = (action) => {
    setOutput(`Processing: ${action}\n\n${code}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      {/* Header */}
      <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center space-x-3 text-3xl font-bold mb-6">
        <AiOutlineFileText className="text-blue-400" />
        <h1>Code Clarified</h1>
      </motion.header>

      {/* Code Input */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-2xl bg-gray-800 p-4 rounded-lg shadow-md">
        <textarea
          className="w-full bg-gray-700 p-3 rounded-lg focus:outline-none"
          rows="6"
          placeholder="Paste your code here..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
        ></textarea>
        <input 
          type="file" 
          accept=".txt,.js,.py,.java,.cpp" 
          className="mt-3 block border-2 border-orange-500 text-blue-400 p-2 rounded-lg cursor-pointer" 
          onChange={handleFileUpload} 
        />
      </motion.div>

      {/* Action Buttons */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex space-x-4 mt-4">
        <button onClick={() => handleProcess("Improve Code")} className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">Improve Code</button>
        <button onClick={() => handleProcess("Document Code")} className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600">Document Code</button>
        <button onClick={() => handleProcess("Comment Code")} className="bg-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-600">Comment Code</button>
      </motion.div>

      {/* Output */}
      {output && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full max-w-2xl bg-gray-800 p-4 rounded-lg shadow-md mt-6">
          <h2 className="text-xl font-bold">Output</h2>
          <pre className="bg-gray-700 p-3 rounded-lg mt-2 overflow-auto">{output}</pre>
        </motion.div>
      )}

      {/* Floating Navbar */}
      <motion.nav initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="fixed bottom-6 bg-gray-800 p-3 rounded-full shadow-lg flex space-x-6">
        <FaHome className="text-2xl text-white cursor-pointer hover:text-blue-400" />
        <FaCog className="text-2xl text-white cursor-pointer hover:text-blue-400" />
        <FaInfoCircle className="text-2xl text-white cursor-pointer hover:text-blue-400" />
      </motion.nav>
    </div>
  );
}
