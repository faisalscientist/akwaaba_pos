import { KeyPadProps } from "types"

const KeyPad = ({ keypadTexts, handleOnClick }: KeyPadProps) => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {keypadTexts.map((keypad, index) => (
        <button
          key={index}
          className=" border border-yellow-500 p-3 md:p-6 text-center shadow-md text-xl"
          onClick={() => handleOnClick(keypad.id)}
        >
          {keypad.text}
        </button>
      ))}
    </div>
  )
}

export default KeyPad
