import React from "react"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HomePage from './components/HomePage/HomePage'
import ParentDashboard from "./components/ParentPage/ParentPage"
import { HeroHighlightDemo } from "./components/MainPage/mainPage"
import Activity from "./components/Activities/activity"
import Councellor from "./components/Councellor/councellor"
import CommunityChat from "./components/Community/Communitychat"
import Quiz from "./components/Games/quizgame"
import SudokuGame from "./components/Games/sudoku"
import CrosswordGame from "./components/Games/Crosswords"
import Leaderboard from "./components/Badges and Leaderboard/Leaderboard"
import OnBoardphase1 from "./components/pages/OnBoardphase1"
import OnBoardphase2 from './components/pages/OnBoardphase2';
import OnBoardphase3 from "./components/pages/OnBoardPhase3"
import RoleSelection from "./components/pages/RoleSelection"; // Role selection page for Parent, Counsellor
//import StudentSignUp from "./components/pages/StudentSignUp"; // Student sign-up page
import ParentSignIn from "./components/pages/ParentSignIn"; // Parent sign-in page
import CounsellorSignIn from "./components/pages/CounsellorSignIn"; // Counselor sign-in page
import ParentSignUp from "./components/pages/ParentSignUp"; // Parent sign-up page
import CounsellorSignUp from "./components/pages/CounsellorSignUp"; // Counselor sign-up page
import Counsellorphase1 from "./components/pages/Counsellorphase1";
import StudentSignIn from './components/pages/StudentSignIn';
import Dashboard from './components/pages/DashBoard';
import StudentSignUp from './components/pages/StudentSignUp';
import JournalPage from './components/pages/JournalPage';
import ResultPage from './components/pages/ResultPage';
import JournalEntryWithSuggestions from './components/pages/JournalPage';
import ActivityRecommendations from './components/pages/Activity';
import Stories from './components/pages/FetchStory';
import CreateStory from './components/pages/CreateStory';
import SuccessStories from "./components/HomePage/SuccessStories"

function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ParentDashboard" element={<ParentDashboard />} />
        <Route path="/MainPage" element={<HeroHighlightDemo />} />
        <Route path="/councellor" element={<Councellor />} />
        <Route path="/communitychat" element={<CommunityChat />} />
        <Route path="/Quiz" element={<Quiz/>} />
        <Route path="/SudokuGame" element={<SudokuGame/>} />
        <Route path="/Crossword" element={<CrosswordGame/>} />
        <Route path="/Leaderboard" element={<Leaderboard/>} />
        <Route path="/phase1" element={<OnBoardphase1 />} />
        <Route path="/phase2" element={<OnBoardphase2 />} />
        <Route path="/phase3" element={<OnBoardphase3/>}/>
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route path="/student-signup" element={<StudentSignUp />} />
        <Route path="/parent-signin" element={<ParentSignIn />} />
        <Route path="/counsellor-signin" element={<CounsellorSignIn />} />
        <Route path="/parent-signup" element={<ParentSignUp />} />
        <Route path="/counsellor-signup" element={<CounsellorSignUp />} />
          <Route path="/counsellorphase1" element={<Counsellorphase1/>}/>
          { <Route path="/student-signin" element={<StudentSignIn/>}/> }
          <Route path="/student-signup" element={<StudentSignUp/>}/>
          <Route path="/result" element={<ResultPage/>}/>
         <Route path="/journals" element={<JournalEntryWithSuggestions/>}/>
         <Route path="/activity" element={<ActivityRecommendations/>}/>
         <Route path="/storyfetch" element={<Stories/>}/>
         <Route path="/createStory" element={<CreateStory/>}/>
         <Route path="/Leaderboard" element={<Leaderboard />} />
         <Route path="/SuccessStories" element={<SuccessStories />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
