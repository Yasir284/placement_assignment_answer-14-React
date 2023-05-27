import React from "react";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import Icons from "./Icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Animation Varients
const containerVarient = {
  initial: {
    boxShadow:
      "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(8, 8, 8, 0.5) 0px 20px 25px -5px, rgba(8, 8, 8, 0.5) 0px 8px 10px -6px",
    opacity: 0,
    y: "-100%",
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    ease: "easeInOut",
    duration: 0.5,
  },
  whileHover: {
    boxShadow:
      "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(8, 8, 8, 0) 0px 0px 1px 1px, rgba(8, 8, 8, 0) 0px 1px 0px 1px",
  },
};

const headingVarient = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: [2, 1],
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};

class App extends React.Component {
  constructor() {
    super();
    this.itemArray = new Array(9).fill("empty");

    this.state = {
      isCross: false,
      winMessage: "",
    };
  }

  reloadGame = () => {
    this.setState({ isCross: false, winMessage: "" });
    this.itemArray.fill("empty", 0, 9);
  };

  changeItem = (itemNumber) => {
    if (this.itemArray[itemNumber] === "empty") {
      this.itemArray[itemNumber] = !this.state.isCross ? "cross" : "circle";
      this.setState((prevState) => ({ isCross: !prevState.isCross }));
    } else {
      return toast("Already Filled", { type: "error" });
    }

    this.checkIsWinner();
  };

  checkIsWinner = () => {
    let draw = this.itemArray.every((item) => item !== "empty");
    if (
      this.itemArray[0] !== "empty" &&
      this.itemArray[0] === this.itemArray[1] &&
      this.itemArray[0] === this.itemArray[2]
    ) {
      this.setState({
        winMessage: `${this.itemArray[0].toUpperCase()} WON 🎉`,
      });
    } else if (
      this.itemArray[3] !== "empty" &&
      this.itemArray[3] === this.itemArray[4] &&
      this.itemArray[3] === this.itemArray[5]
    ) {
      this.setState({
        winMessage: `${this.itemArray[3].toUpperCase()} WON 🎉`,
      });
    } else if (
      this.itemArray[6] !== "empty" &&
      this.itemArray[6] === this.itemArray[7] &&
      this.itemArray[6] === this.itemArray[8]
    ) {
      this.setState({
        winMessage: `${this.itemArray[6].toUpperCase()} WON 🎉`,
      });
    } else if (
      this.itemArray[0] !== "empty" &&
      this.itemArray[0] === this.itemArray[3] &&
      this.itemArray[0] === this.itemArray[6]
    ) {
      this.setState({
        winMessage: `${this.itemArray[0].toUpperCase()} WON 🎉`,
      });
    } else if (
      this.itemArray[1] !== "empty" &&
      this.itemArray[1] === this.itemArray[4] &&
      this.itemArray[1] === this.itemArray[7]
    ) {
      this.setState({
        winMessage: `${this.itemArray[1].toUpperCase()} WON 🎉`,
      });
    } else if (
      this.itemArray[2] !== "empty" &&
      this.itemArray[2] === this.itemArray[5] &&
      this.itemArray[2] === this.itemArray[8]
    ) {
      this.setState({
        winMessage: `${this.itemArray[2].toUpperCase()} WON 🎉`,
      });
    } else if (
      this.itemArray[0] !== "empty" &&
      this.itemArray[0] === this.itemArray[4] &&
      this.itemArray[0] === this.itemArray[8]
    ) {
      this.setState({
        winMessage: `${this.itemArray[0].toUpperCase()} WON 🎉`,
      });
    } else if (
      this.itemArray[2] !== "empty" &&
      this.itemArray[2] === this.itemArray[4] &&
      this.itemArray[2] === this.itemArray[6]
    ) {
      this.setState({
        winMessage: `${this.itemArray[2].toUpperCase()} WON 🎉`,
      });
    } else if (draw === true && !this.state.winMessage) {
      this.setState({ winMessage: "It's a Draw" });
    }
  };

  render() {
    return (
      <>
        {/*============================================ Heading ============================================ */}
        <motion.h1
          className="bg-[rgba(3,11,11,0.5)] shadow-xl shadow-[rgba(8,8,8,0.5)] rounded-md m-3 mb-16 text-4xl text-center font-extrabold py-4"
          {...containerVarient}
        >
          Tic Tac Toe
        </motion.h1>

        {/*============================================ Main ============================================ */}
        <AnimatePresence>
          <ToastContainer position="top-left" />

          <motion.div
            className="flex flex-col items-center"
            // {...containerVarient}
          >
            {this.state.winMessage ? (
              <motion.div key={this.state.winMessage} {...headingVarient}>
                <h1 className="text-4xl font-semibold text-center text-green-500 rounded-md shadow-inner p-2">
                  {this.state.winMessage}
                </h1>
                <button
                  onClick={this.reloadGame}
                  className="w-72 font-semibold text-white bg-green-500  rounded-lg my-4 py-2 transition-all duration-200 ease-in-out  active:scale-75"
                >
                  Reset Game
                </button>
              </motion.div>
            ) : (
              <motion.div key={this.state.isCross} {...headingVarient}>
                <h1 className="mb-16 p-3 flex flex-row justify-center items-center gap-4 text-4xl font-semibold rounded-md shadow-inner shadow-black">
                  <Icons
                    size="2.5rem"
                    name={!this.state.isCross ? "cross" : "circle"}
                    className="text-yellow-500"
                  />{" "}
                  {!this.state.isCross ? "Cross" : "Circle"} turns
                </h1>
              </motion.div>
            )}

            <div className="grid grid-cols-3 rounded-md bg-[rgba(3,11,11,0.5)] shadow-xl shadow-[rgba(8,8,8,0.5)] justify-center">
              {this.itemArray.map((item, index) => (
                <div
                  key={index}
                  onClick={() => this.changeItem(index)}
                  className="p-8 border-solid border-2 active:opacity-0 active:scale-75 transition-all ease-in-out duration-200 border-[rgba(0,0,0,0.1)]"
                >
                  <Icons size="1.5rem" name={item} />
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </>
    );
  }
}

export default App;
