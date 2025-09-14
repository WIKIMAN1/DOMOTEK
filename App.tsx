import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomeScreen from './screens/HomeScreen';
import RoutinesScreen from './screens/RoutinesScreen';
import SolutionsScreen from './screens/SolutionsScreen';
import AssistantScreen from './screens/AssistantScreen';
import ARScreen from './screens/ARScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import AIScanScreen from './screens/AIScanScreen';


const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen font-sans">
      <div className="w-full max-w-sm h-[800px] max-h-[90vh] bg-[#0c0c1e] shadow-2xl shadow-purple-900/50 rounded-3xl overflow-hidden relative">
        <HashRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/routines" element={<RoutinesScreen />} />
              <Route path="/solutions" element={<SolutionsScreen />} />
              <Route path="/assistant" element={<AssistantScreen />} />
              <Route path="/ar" element={<ARScreen />} />
              <Route path="/ai-scan" element={<AIScanScreen />} />
              <Route path="/nosotros" element={<AboutScreen />} />
              <Route path="/contacto" element={<ContactScreen />} />
            </Routes>
          </Layout>
        </HashRouter>
      </div>
    </div>
  );
};

export default App;