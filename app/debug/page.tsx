export default function DebugPage() {
  return (
    <div style={{ 
      backgroundColor: 'red', 
      color: 'white', 
      padding: '20px', 
      minHeight: '100vh',
      fontSize: '24px'
    }}>
      <h1>DEBUG PAGE</h1>
      <p>If you can see this red page with white text, React is working!</p>
      <div style={{
        backgroundColor: 'blue',
        color: 'yellow',
        padding: '10px',
        margin: '20px 0'
      }}>
        This is a blue box with yellow text
      </div>
      
      {/* Test basic Tailwind */}
      <div className="bg-green-500 text-white p-4 rounded-lg mt-4">
        If this box is green, Tailwind is working!
      </div>
      
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg mt-4">
        If this box has a gradient, Tailwind gradients work!
      </div>
    </div>
  );
}