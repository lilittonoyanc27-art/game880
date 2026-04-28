import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  RotateCcw, 
  Play, 
  CheckCircle2, 
  XCircle, 
  BookOpen, 
  ChevronRight,
  ListRestart,
  Heart,
  Star,
  Zap,
  Info
} from 'lucide-react';
import { POSSESSIVE_THEORY, POSSESSIVE_QUESTIONS } from './constants';

export default function App() {
  const [gameState, setGameState] = useState<'start' | 'theory' | 'playing' | 'end'>('start');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const shuffledQuestions = useMemo(() => {
    return [...POSSESSIVE_QUESTIONS].sort(() => Math.random() - 0.5);
  }, [gameState === 'playing']);

  const currentQuestion = shuffledQuestions[currentIndex];

  const handleChoice = (choice: string) => {
    if (feedback) return;

    if (choice === currentQuestion.target) {
      setFeedback('correct');
      setScore(s => s + 1);
    } else {
      setFeedback('incorrect');
    }

    setTimeout(() => {
      setFeedback(null);
      if (currentIndex < shuffledQuestions.length - 1) {
        setCurrentIndex(i => i + 1);
      } else {
        setGameState('end');
      }
    }, 1200);
  };

  const restart = () => {
    setGameState('start');
    setCurrentIndex(0);
    setScore(0);
    setFeedback(null);
  };

  return (
    <div className="min-h-screen bg-[#05051a] text-slate-100 font-sans overflow-x-hidden flex flex-col items-center justify-center p-4">
      
      {/* Background Stardust Effect */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_50%_50%,#1e1b4b_0%,#05050f_100%)]" />
      <div className="fixed inset-0 pointer-events-none -z-10 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <AnimatePresence mode="wait">
        {gameState === 'start' && (
          <motion.div
            key="start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full max-w-2xl bg-indigo-950/20 backdrop-blur-3xl p-10 md:p-16 rounded-[4rem] border border-white/5 shadow-2xl text-center"
          >
            <div className="mb-10 flex justify-center gap-6">
              {[Heart, Star, Zap].map((Icon, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                  className="w-20 h-20 bg-indigo-500 rounded-3xl flex items-center justify-center shadow-2xl border border-indigo-400/50"
                >
                  <Icon className="w-10 h-10 text-white fill-white/20" />
                </motion.div>
              ))}
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter italic uppercase text-transparent bg-clip-text bg-gradient-to-br from-indigo-300 via-white to-indigo-600 leading-none">
              SPANISH<br/>POSSESSIVES
            </h1>
            <p className="text-indigo-400 font-bold uppercase tracking-[0.5em] mb-12 text-xs">Adjectives & Pronouns Mastery</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button 
                onClick={() => setGameState('theory')}
                className="py-6 bg-indigo-900 hover:bg-indigo-800 text-white rounded-[2rem] font-black text-xl transition-all flex items-center justify-center gap-3 border-b-6 border-indigo-950"
              >
                <BookOpen className="w-6 h-6" />
                TEORÍA
              </button>
              <button 
                onClick={() => setGameState('playing')}
                className="py-6 bg-white text-indigo-950 rounded-[2rem] font-black text-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 border-b-6 border-slate-300 shadow-xl"
              >
                <Play className="w-6 h-6 fill-indigo-950" />
                JUGAR
              </button>
            </div>
          </motion.div>
        )}

        {gameState === 'theory' && (
          <motion.div
            key="theory"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="w-full max-w-5xl bg-indigo-950/20 backdrop-blur-3xl p-8 md:p-14 rounded-[3.5rem] border border-white/5 shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            <div className="flex items-center justify-between mb-10 border-b border-indigo-500/20 pb-8">
               <div className="flex items-center gap-6">
                 <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-lg">
                   <BookOpen className="w-8 h-8 text-indigo-950" />
                 </div>
                 <div>
                   <h2 className="text-3xl font-black italic uppercase tracking-tight text-white">Gramática</h2>
                   <p className="text-xs text-indigo-400 font-bold uppercase tracking-widest">Possessive Forms</p>
                 </div>
               </div>
               <button 
                 onClick={() => setGameState('start')}
                 className="p-4 hover:bg-white/10 rounded-full transition-all group"
               >
                 <ListRestart className="w-8 h-8 group-hover:rotate-180 transition-transform duration-500" />
               </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {POSSESSIVE_THEORY.map((theory, idx) => (
                <div key={idx} className="bg-indigo-950/40 p-8 rounded-[2.5rem] border border-indigo-500/10 hover:border-indigo-500/30 transition-all">
                  <h3 className="text-2xl font-black mb-2 text-indigo-300 italic uppercase">{theory.title}</h3>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed font-medium">{theory.description}</p>
                  
                  <div className="space-y-3">
                    {theory.items.map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-black/20 rounded-2xl border border-white/5">
                        <span className="font-black text-indigo-100 italic">{item.spanish}</span>
                        <div className="text-right">
                          <span className="text-[10px] block font-black uppercase text-indigo-500 leading-none mb-1">{item.usage}</span>
                          <span className="text-slate-400 text-sm font-bold uppercase">{item.english}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-500/10 p-8 rounded-[2.5rem] border border-amber-500/20 flex items-start gap-6 mb-10">
              <div className="p-3 bg-amber-500 rounded-2xl shadow-lg">
                <Info className="w-6 h-6 text-indigo-950" />
              </div>
              <div>
                <h4 className="font-black text-amber-500 uppercase text-xs tracking-[0.2em] mb-2">Importante</h4>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  Remember: Possessives agree in gender and number with the <b className="text-white">noun they describe</b>, not the person who owns it. (Example: "Sus casas" means "their houses", regardless of whether the owners are male or female.)
                </p>
              </div>
            </div>

            <button 
              onClick={() => setGameState('playing')}
              className="w-full py-8 bg-indigo-500 text-white rounded-[2.5rem] font-black text-2xl hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-4 shadow-2xl border-b-8 border-indigo-700"
            >
              INICIAR PRÁCTICA <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}

        {gameState === 'playing' && (
          <motion.div
            key="playing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full max-w-4xl flex flex-col items-center"
          >
            {/* HUD */}
            <div className="w-full flex justify-between items-center mb-10 px-4 max-w-3xl">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-indigo-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-[-5deg]">
                  <span className="text-2xl font-black italic">{currentIndex + 1}</span>
                </div>
                <div>
                   <div className="text-[10px] font-black text-indigo-500 uppercase tracking-widest leading-none mb-1">PROGRESO</div>
                   <div className="text-xl font-black text-white italic">{currentIndex + 1} / {shuffledQuestions.length}</div>
                </div>
              </div>

              <div className="bg-indigo-950/80 px-8 py-3 rounded-full border border-indigo-500/20 backdrop-blur-3xl shadow-xl">
                 <span className="text-indigo-500 font-bold uppercase text-[10px] tracking-[0.3em] mr-4">PUNTOS</span>
                 <span className="text-2xl font-black italic text-white">{score}</span>
              </div>
            </div>

            <div className="w-full max-w-2xl relative">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="bg-indigo-950/20 backdrop-blur-3xl border border-white/10 p-12 md:p-20 rounded-[4rem] w-full text-center relative overflow-hidden shadow-2xl"
                >
                  <div className="absolute top-10 left-10 opacity-10">
                    <span className="text-8xl font-black italic select-none">{currentQuestion.type === 'adjective' ? 'ADJ' : 'PRON'}</span>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-black mb-8 italic tracking-tight uppercase leading-tight text-white relative z-10">
                    "{currentQuestion.prompt}"
                  </h2>
                  <p className="text-indigo-400/60 font-bold mb-14 text-sm md:text-lg italic uppercase tracking-wider relative z-10">
                    ({currentQuestion.translation})
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 relative z-10">
                    {currentQuestion.choices.map(choice => (
                      <button
                        key={choice}
                        disabled={!!feedback}
                        onClick={() => handleChoice(choice)}
                        className={`py-6 rounded-3xl font-black text-2xl transition-all border-b-8 shadow-xl ${
                          feedback === 'correct' && choice === currentQuestion.target
                            ? 'bg-emerald-500 border-emerald-800 text-white scale-105'
                            : feedback === 'incorrect' && choice === currentQuestion.target
                            ? 'bg-rose-500 border-rose-800 text-white'
                            : 'bg-indigo-900 border-indigo-950 text-indigo-100 hover:bg-indigo-800 hover:translate-y-[-4px]'
                        }`}
                      >
                        {choice}
                      </button>
                    ))}
                  </div>

                  <AnimatePresence>
                    {feedback && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`absolute inset-0 z-30 flex flex-col items-center justify-center backdrop-blur-xl rounded-[4rem] ${feedback === 'correct' ? 'bg-emerald-500/10' : 'bg-rose-500/10'}`}
                      >
                         {feedback === 'correct' ? (
                           <motion.div initial={{ scale: 0, rotate: -20 }} animate={{ scale: 1, rotate: 0 }} className="flex flex-col items-center">
                              <div className="w-28 h-28 bg-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(16,185,129,0.5)]">
                                 <CheckCircle2 className="w-16 h-16 text-white" />
                              </div>
                              <div className="text-5xl font-black uppercase italic text-white tracking-tighter">¡CORRECTO!</div>
                           </motion.div>
                         ) : (
                           <motion.div initial={{ scale: 0, rotate: 20 }} animate={{ scale: 1, rotate: 0 }} className="flex flex-col items-center">
                              <div className="w-28 h-28 bg-rose-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(244,63,94,0.5)]">
                                 <XCircle className="w-16 h-16 text-white" />
                              </div>
                              <div className="text-5xl font-black uppercase italic text-rose-500 mb-2 tracking-tighter">INCORRECTO</div>
                              <div className="px-8 py-3 bg-white/10 rounded-2xl text-white font-black uppercase text-lg italic tracking-widest">{currentQuestion.target}</div>
                           </motion.div>
                         )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {gameState === 'end' && (
          <motion.div
            key="end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-lg bg-indigo-950/30 backdrop-blur-3xl p-16 md:p-24 rounded-[5rem] border border-white/5 shadow-2xl text-center relative overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-r from-indigo-500 via-white to-indigo-500" />
            
            <div className="relative mb-12">
              <Trophy className="w-40 h-40 text-yellow-400 mx-auto drop-shadow-[0_0_40px_rgba(250,204,21,0.5)]" />
              <motion.div 
                animate={{ scale: [1, 1.2, 1], rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-8 border-dashed border-white/5 rounded-full scale-125"
              />
            </div>
            
            <h1 className="text-6xl font-black mb-4 italic tracking-tighter uppercase leading-none text-white">
              FINALIZADO
            </h1>
            <p className="text-indigo-500 font-bold mb-14 uppercase tracking-widest text-xs">PUNTUACIÓN TOTAL OBTENIDA</p>
            
            <div className="flex justify-center gap-10 mb-16">
               <div className="text-center">
                  <div className="text-9xl font-black text-white italic leading-none relative">
                    {score}
                    <span className="text-3xl text-indigo-700 absolute -bottom-6 -right-10">/ {shuffledQuestions.length}</span>
                  </div>
               </div>
            </div>

            <button 
              onClick={restart}
              className="w-full py-8 bg-white text-indigo-950 rounded-[3rem] font-black text-3xl hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-4 border-b-8 border-slate-300"
            >
              <RotateCcw className="w-10 h-10" />
              REINICIAR
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Blobs */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
         <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full animate-pulse" />
         <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full animate-pulse [animation-delay:3s]" />
      </div>
    </div>
  );
}
