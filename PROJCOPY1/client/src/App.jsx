import React, { useState, Component } from 'react';
import AddProjects from './components/Addprojects'; // Importing the AddProjects component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

// Import missing components
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';
import Dashboard from './pages/Dashboard';
import Teams from './pages/Teams';
import CompletedProjects from './pages/CompletedProjects';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
    return (
    <Router>
      <ErrorBoundary>
          <div className="flex">
            <Navbar toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} />
            <div className="flex-1 mt-16 ml-64"> {/* Adjusted margin to accommodate sidebar width */}
              <div className="flex-1 mt-16">
                <main className="p-4">
                  <AddProjects /> {/* Adding the Add Projects button */}
                  <Routes>
                    <Route path="/" element={
                      <div>
                        <h1 className="text-2xl font-bold">Welcome to My App</h1>
                        Home Page
                      </div>} />
                    <Route path="Projects" element={<Projects />} />
                    <Route path="Tasks" element={<Tasks />} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Teams" element={<Teams />} />
                    <Route path="CompletedProjects" element={<CompletedProjects />} />
                  </Routes>
                </main>
              </div>
            </div>
          </div>
      </ErrorBoundary>
    </Router>
  
  );
};

export default App;
