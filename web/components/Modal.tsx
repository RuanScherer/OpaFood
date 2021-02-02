interface ModalProps {
  show: boolean
  title: string
  mainButton: {
    label: string
    backgroundColor?: string
    textColor?: string
  }
  text?: string
  illustration?: string
}

const Modal: React.FC<ModalProps> = ({ show, title, mainButton, text, illustration }) => {
  return (
    <div className={`${show ? 'flex' : 'hidden'} absolute items-center justify-center bg-black bg-opacity-40 w-full h-full top-0 left-0 z-50 p-14`}>
      <main className="fit-content max-w-2xl bg-white px-8 py-14 rounded-lg shadow-lg flex flex-col items-center text-center">
        { illustration && <img className="w-9/12 mb-10" src={illustration}/>}
        
        <h1 className="font-bold text-3xl w-10/12">{title}</h1>
        
        <p className="my-7 font-medium text-lg text-gray-600 w-10/12">{text}</p>
        
        <button 
          className={`
            ${'bg-' + (mainButton.backgroundColor || 'primary')}
            ${'text-' + (mainButton.textColor || 'white')} 
            w-10/12 px-6 py-3 rounded-xl font-bold hover:bg-opacity-90 transition duration-200
          `}>
          {mainButton.label}
        </button>
      </main>
    </div>
  )
}

export default Modal