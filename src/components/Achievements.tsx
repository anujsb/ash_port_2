"use client"
import { useState, useEffect } from 'react';
import { Trophy, Award, ArrowRight, BarChart3, Medal, Brain } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

type GateScoreData = {
  year: number;
  subject: string;
  score: string;
  rank: string;
  percentile: string;
  category: string;
  paperCode: string;
};

// Replace with your actual GATE score data
const gateData: GateScoreData = {
  year: 2024,
  subject: "Computer Science & Information Technology",
  score: "523",
  rank: "5844",
  percentile: "46.15",
  category: "General",
  paperCode: "CS"
};

export default function GateAchievementShowcase() {
  const [animateStats, setAnimateStats] = useState(false);
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    // Start animations after component mounts
    setAnimateStats(true);
    
    // Simple counter animation for visual effect
    const interval = setInterval(() => {
      setCounter(prev => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        return 100;
      });
    }, 20);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="w-full max-w-4xl mx-auto font-sans my-10">
      {/* Header Section */}
      <div className="relative overflow-hidden rounded-t-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent)]"></div>
        </div>
        
        <div className="relative z-10 flex justify-between items-start">
          <div>
            <div className="flex items-center space-x-2">
              <Trophy className="h-8 w-8 text-yellow-300" />
              <h2 className="text-3xl font-bold">GATE {gateData.year}</h2>
            </div>
            <p className="text-indigo-100 mt-2 max-w-lg">
              Graduate Aptitude Test in Engineering
            </p>
            <div className="flex items-center mt-4 text-indigo-100">
              <Award className="h-5 w-5 mr-2" />
              <span>{gateData.subject}</span>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-6xl font-bold text-white">{gateData.score}</div>
            <div className="text-indigo-100 mt-1">Score</div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="bg-white dark:bg-gray-900 rounded-b-2xl shadow-xl p-6">
        {/* Paper Details */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center">
            <div className="bg-indigo-50 dark:bg-indigo-900/30 p-3 rounded-lg">
              <Brain className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Paper Code</h3>
              <p className="text-gray-500 dark:text-gray-400">CS - {gateData.subject}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-indigo-50 dark:bg-indigo-900/30 p-3 rounded-lg">
              <Medal className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Category</h3>
              <p className="text-gray-500 dark:text-gray-400">{gateData.category}</p>
            </div>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Rank Card */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-900/30 shadow-sm transition-all duration-500 hover:shadow-md hover:scale-105">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300 uppercase tracking-wider">All India Rank</h3>
                <div className="mt-2 flex items-baseline">
                  <p className={`text-4xl font-extrabold text-blue-700 dark:text-blue-400 transition-all duration-1000 ${animateStats ? 'opacity-100' : 'opacity-0'}`}>
                    {gateData.rank}
                  </p>
                  <p className="ml-2 text-sm text-blue-600 dark:text-blue-500">of 100K+</p>
                </div>
              </div>
              <div className="bg-blue-100 dark:bg-blue-800/30 p-3 rounded-full">
                <Trophy className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <p className="mt-4 text-sm text-blue-700 dark:text-blue-300 font-medium flex items-center">
              <ArrowRight className="h-4 w-4 mr-1" />
              Top tier performance
            </p>
          </div>
          
          {/* Percentile Card */}
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-2xl p-6 border border-purple-100 dark:border-purple-900/30 shadow-sm transition-all duration-500 hover:shadow-md hover:scale-105">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium text-purple-800 dark:text-purple-300 uppercase tracking-wider">Marks</h3>
                <div className="mt-2 flex items-baseline">
                  <p className={`text-4xl font-extrabold text-purple-700 dark:text-purple-400 transition-all duration-1000 ${animateStats ? 'opacity-100' : 'opacity-0'}`}>
                    {gateData.percentile}
                  </p>
                  <p className="ml-2 text-sm text-purple-600 dark:text-purple-500"></p>
                </div>
              </div>
              <div className="bg-purple-100 dark:bg-purple-800/30 p-3 rounded-full">
                <BarChart3 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <div className="mt-4 h-2 bg-purple-100 dark:bg-purple-800/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-purple-600 dark:bg-purple-500 rounded-full transition-all duration-1500 ease-out"
                style={{ width: `${counter}%` }}
              ></div>
            </div>
          </div>
          
          {/* Score Card */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-6 border border-emerald-100 dark:border-emerald-900/30 shadow-sm transition-all duration-500 hover:shadow-md hover:scale-105">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">Score</h3>
                <div className="mt-2 flex items-baseline">
                  <p className={`text-4xl font-extrabold text-emerald-700 dark:text-emerald-400 transition-all duration-1000 ${animateStats ? 'opacity-100' : 'opacity-0'}`}>
                    {gateData.score}
                  </p>
                  <p className="ml-2 text-sm text-emerald-600 dark:text-emerald-500">/1000</p>
                </div>
              </div>
              <div className="bg-emerald-100 dark:bg-emerald-800/30 p-3 rounded-full">
                <Award className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
            <p className="mt-4 text-sm text-emerald-700 dark:text-emerald-300 font-medium flex items-center">
              <ArrowRight className="h-4 w-4 mr-1" />
              Exceptional performance
            </p>
          </div>
        </div>
        
        {/* Achievement Context */}
        <Alert className="mt-8 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border-indigo-100 dark:border-indigo-800/30">
          <div className="flex items-center">
            <Award className="h-5 w-5 text-indigo-500 dark:text-indigo-400 mr-2" />
            <AlertTitle className="text-indigo-800 dark:text-indigo-300 font-medium">
              About GATE
            </AlertTitle>
          </div>
          <AlertDescription className="mt-2 text-indigo-700 dark:text-indigo-300">
            GATE is a prestigious national examination that tests the comprehensive understanding of various 
            undergraduate subjects in engineering and science for admission to postgraduate programs in top 
            institutions in India. Scoring in the top ranks demonstrates exceptional academic excellence and 
            technical knowledge.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}