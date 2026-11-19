import { createContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const AllContext = createContext();

export const AllProvider = ({ children }) => {
  const Navigate = useNavigate();

  const img = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=3840&q=80",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=3840&q=80",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=3840&q=80",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=3840&q=80",
    },
  ];

  /* Background image */
  const [background, setBackground] = useState(img[2].src);
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background-image",
      `url("${background}")`,
    );
  }, [background]);

  const handleNextImage = () => {
    const currentIndex = img.findIndex((item) => item.src === background);
    const nextIndex =
      currentIndex === img.length - 1 ? 0 : (currentIndex + 1) % img.length;
    setBackground(img[nextIndex].src);
  };

  const handlePrevImage = () => {
    const currentIndex = img.findIndex((item) => item.src === background);
    const prevIndex =
      currentIndex === 0 || currentIndex === -1
        ? img.length - 1
        : (currentIndex - 1) % img.length;
    setBackground(img[prevIndex].src);
  };

  /* Color all pages */
  const [color, setColor] = useState("#4147ff");
  useEffect(() => {
    document.documentElement.style.setProperty("--color", `${color}`);
  }, [color]);

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  /* Mode settings */
  const [mode, setMode] = useState("dark");
  const [bgMode, setBgMode] = useState("bg-mode-dark");
  const [bgInput, setBgInput] = useState("mode-dark");

  /* Profile Inputs */
  const [name, setName] = useState("Sleman Alnbke");
  const [goal, setGoal] = useState("");

  /* Game 2 Logic */
  const NameButton = ["Green", "Red", "Blue", "Yellow"];
  const Color = [
    "text-success",
    "text-danger",
    "text-info",
    "text-light",
    "text-warning",
    "text-primary",
    "text-secondary",
  ];
  const [difficulty, setDifficulty] = useState("easy");
  const [currentRound, setCurrentRound] = useState(1);
  const [maxRounds, setMaxRounds] = useState(4);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [targetText, setTargetText] = useState("");
  const [targetColorClass, setTargetColorClass] = useState("");
  const [buttons, setButtons] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const setupNewRound = () => {
    const randomText =
      NameButton[Math.floor(Math.random() * NameButton.length)];
    setTargetText(randomText);
    const randomColor = Color[Math.floor(Math.random() * Color.length)];
    setTargetColorClass(randomColor);
    setButtons(shuffleArray(NameButton));
  };

  const startGame = (customGoal = goal) => {
    const rounds = customGoal ? Number(customGoal) : 0;
    if (rounds <= 0) return;
    setMaxRounds(rounds);
    setCurrentRound(1);
    setScore(0);
    setMistakes(0);
    setGameOver(false);
    setIsPlaying(true);
    setupNewRound();
  };

  const handleButtonClick = (clickedName) => {
    if (gameOver) return;
    let updatedScore = score;
    let updatedMistakes = mistakes;

    if (clickedName === targetText) {
      updatedScore = score + 1;
      setScore(updatedScore);
    } else {
      updatedMistakes = mistakes + 1;
      setMistakes(updatedMistakes);
    }
    if (currentRound >= maxRounds) {
      setGameOver(true);
      setIsPlaying(false);
      handleSaved(updatedScore, "Game 2");
    } else {
      setCurrentRound((prev) => prev + 1);
      setupNewRound();
    }
  };

  /* Time end Game 2 */
  useEffect(() => {
    if (gameOver) {
      Navigate("/leaderboard");
    }
  }, [gameOver]);

  /* Save & Reset Game for Print Player Score */
  const [save, setSave] = useState([]);
  const handleSaved = (fineScore, gameName = "Game 1") => {
    const PlayerScore = {
      name: name,
      game: gameName,
      score: fineScore,
      dateTime: new Date().toLocaleString("ar-EG"),
    };
    setSave((prevPlayerScore) => [...prevPlayerScore, PlayerScore]);
  };

  const handleReset = () => {
    setScore(0);
    setGameOver(false);
    setIsPlaying(false);
    setSave([]);
  };

  /* Finish Game 2 */
  const [finished, setFinished] = useState(false);
  useEffect(() => {
    if (finished) {
      Navigate("/leaderboard");
    }
  }, [finished]);

  const finishAndSave = () => {
    setIsPlaying(false);
    handleSaved(score, "Game 2");
    setFinished(true);
    startGame();
    setGameOver(true);
  };

  const [saving, setSaving] = useState(false);
  useEffect(() => {
    if (saving) {
      Navigate("/Play");
      setSaving(false);
    }
  }, [saving]);

  const Cards = [
    { id: 1, img: "👑" },
    { id: 2, img: "🎃" },
    { id: 3, img: "💎" },
    { id: 4, img: "🔥" },
    { id: 5, img: "🎁" },
    { id: 6, img: "🎨" },
    { id: 7, img: "⚽" },
    { id: 8, img: "🪁" },
  ];

  const [activeCards, setActiveCards] = useState([]);
  const [scoreG1, setScoreG1] = useState(0);
  const [mistakesG1, setMistakesG1] = useState(0);
  const [maxRoundsG1, setMaxRoundsG1] = useState(4);
  const [currentRoundG1, setCurrentRoundG1] = useState(1);
  const [overGame1, setOverGame1] = useState(false);
  const [isPlayingG1, setIsPlayingG1] = useState(false);

  const [g1FlashingIndex, setG1FlashingIndex] = useState(null);
  const [g1DotIndex, setG1DotIndex] = useState(null);

  const movesCountRef = useRef(0);
  const maxMovesForCurrentRoundRef = useRef(4);
  const dotTimerRef = useRef(null);

  const getRandomNextIndex = (total, currentIndex) => {
    if (total <= 1) return 0;
    let next;
    do {
      next = Math.floor(Math.random() * total);
    } while (next === currentIndex);
    return next;
  };

  const setupNewRoundG1 = () => {
    let count = 4;
    if (difficulty === "normal") count = 6;
    if (difficulty === "hard") count = 8;

    const shuffledOriginals = shuffleArray(Cards);
    const selected = shuffledOriginals.slice(0, count);
    setActiveCards(selected);

    movesCountRef.current = 1;
    maxMovesForCurrentRoundRef.current = Math.floor(Math.random() * count) + 1;

    const initialDot = Math.floor(Math.random() * selected.length);
    setG1DotIndex(initialDot);
  };

  const startGame1 = () => {
    if (!goal || Number(goal) <= 0) return;
    const rounds = Number(goal);
    setMaxRoundsG1(rounds);
    setCurrentRoundG1(1);
    setScoreG1(0);
    setMistakesG1(0);
    setOverGame1(false);
    setIsPlayingG1(true);
    setupNewRoundG1();
  };

  useEffect(() => {
    if (!isPlayingG1 || activeCards.length === 0 || overGame1) return;

    const flashInterval = setInterval(() => {
      setG1FlashingIndex((prev) =>
        getRandomNextIndex(activeCards.length, prev),
      );
    }, 500);

    return () => clearInterval(flashInterval);
  }, [isPlayingG1, activeCards, overGame1]);

  const advanceDotOrRound = (isTimeOut = false) => {
    if (isTimeOut) {
      setMistakesG1((prev) => prev + 1);
    }

    if (movesCountRef.current >= maxMovesForCurrentRoundRef.current) {
      setCurrentRoundG1((prevRound) => {
        if (prevRound >= maxRoundsG1) {
          setOverGame1(true);
          setIsPlayingG1(false);
          return prevRound;
        } else {
          setupNewRoundG1();
          return prevRound + 1;
        }
      });
    } else {
      movesCountRef.current += 1;
      setG1DotIndex((prev) => getRandomNextIndex(activeCards.length, prev));
    }
  };

  const resetDotTimer = () => {
    if (dotTimerRef.current) {
      clearInterval(dotTimerRef.current);
    }
    if (isPlayingG1 && !overGame1 && activeCards.length > 0) {
      dotTimerRef.current = setInterval(() => {
        advanceDotOrRound(true);
      }, 1000); // 1 ثانية
    }
  };

  useEffect(() => {
    if (isPlayingG1) {
      resetDotTimer();
    }
    return () => {
      if (dotTimerRef.current) clearInterval(dotTimerRef.current);
    };
  }, [isPlayingG1, activeCards, overGame1, maxRoundsG1]);

  const handleCardClickG1 = (clickedIndex) => {
    if (!isPlayingG1 || overGame1) return;

    if (clickedIndex === g1DotIndex) {
      setScoreG1((prev) => prev + 1);
    } else {
      setMistakesG1((prev) => prev + 1);
    }

    advanceDotOrRound(false);
    resetDotTimer();
  };

  const finishAndSaveG1 = () => {
    setIsPlayingG1(false);
    handleSaved(scoreG1, "Game 1");
    setOverGame1(true);
  };

  useEffect(() => {
    if (overGame1) {
      handleSaved(scoreG1, "Game 1");
      Navigate("/leaderboard");
    }
  }, [overGame1]);

  const handleResetG1 = () => {
    setIsPlayingG1(false);
    setActiveCards([]);
    setG1DotIndex(null);
    setG1FlashingIndex(null);
    if (dotTimerRef.current) clearInterval(dotTimerRef.current);
  };

  return (
    <AllContext.Provider
      value={{
        handleNextImage,
        handlePrevImage,
        handleColor,
        color,
        setColor,
        mode,
        setMode,
        bgInput,
        setBgInput,
        bgMode,
        setBgMode,
        name,
        setName,
        goal,
        setGoal,
        difficulty,
        setDifficulty,
        score,
        setScore,
        currentRound,
        setCurrentRound,
        maxRounds,
        setMaxRounds,
        mistakes,
        setMistakes,
        targetColorClass,
        setTargetColorClass,
        targetText,
        setTargetText,
        buttons,
        setButtons,
        gameOver,
        setGameOver,
        shuffleArray,
        startGame,
        handleButtonClick,
        isPlaying,
        setIsPlaying,
        save,
        setSave,
        handleSaved,
        handleReset,
        finished,
        setFinished,
        finishAndSave,
        setSaving,

        Cards,
        scoreG1,
        setScoreG1,
        mistakesG1,
        setMistakesG1,
        maxRoundsG1,
        setMaxRoundsG1,
        currentRoundG1,
        setCurrentRoundG1,
        activeCards,
        setActiveCards,
        startGame1,
        handleCardClickG1,
        finishAndSaveG1,
        handleResetG1,
        g1FlashingIndex,
        g1DotIndex,
        overGame1,
        isPlayingG1,
      }}
    >
      {children}
    </AllContext.Provider>
  );
};
