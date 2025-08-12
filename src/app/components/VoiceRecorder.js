'use client';

import { useState, useRef, useEffect } from 'react';

export default function VoiceRecorder() {
  // State management - let me explain each one:
  const [isRecording, setIsRecording] = useState(false); // Track if we're currently recording
  const [recordingTime, setRecordingTime] = useState(0); // Track seconds elapsed
  const [audioURL, setAudioURL] = useState(null); // Store the recorded audio URL for playback
  
  // Refs - these persist across renders without causing re-renders
  const mediaRecorderRef = useRef(null); // Store the MediaRecorder instance
  const audioChunksRef = useRef([]); // Store audio data chunks as they come in
  const timerRef = useRef(null); // Store the interval timer reference

  // Effect to handle the recording timer
  useEffect(() => {
    if (isRecording) {
      // Start a timer that updates every second
      timerRef.current = setInterval(() => {
        setRecordingTime((prev) => {
          // Auto-stop at 30 seconds
          if (prev >= 29) {
            stopRecording();
            return 30;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      // Clear timer when not recording
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    // Cleanup function - runs when component unmounts or dependencies change
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRecording]);

  // Start recording function
  const startRecording = async () => {
    try {
      // Reset previous recording data
      audioChunksRef.current = [];
      setAudioURL(null);
      setRecordingTime(0);

      // Request microphone access
      // getUserMedia returns a MediaStream with audio from the microphone
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: true 
      });

      // Create MediaRecorder instance
      // 'webm' is widely supported and gives good compression
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'audio/webm'
      });

      // Set up event listener for when audio data is available
      // This fires periodically during recording
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      // Set up event listener for when recording stops
      mediaRecorder.onstop = () => {
        // Combine all audio chunks into a single Blob
        const audioBlob = new Blob(audioChunksRef.current, { 
          type: 'audio/webm' 
        });
        
        // Create a URL that can be used in an audio element
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);

        // Clean up: stop all tracks to release the microphone
        stream.getTracks().forEach(track => track.stop());
      };

      // Store the recorder instance and start recording
      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
      setIsRecording(true);

    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Could not access microphone. Please check permissions.');
    }
  };

  // Stop recording function
  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setRecordingTime(0);
    }
  };

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        Voice Symptom Entry
      </h2>

      {/* Recording Controls */}
      <div className="flex flex-col items-center space-y-4">
        
        {/* Main Record Button */}
        <button
          onClick={isRecording ? stopRecording : startRecording}
          className={`
            relative w-24 h-24 rounded-full transition-all duration-300
            ${isRecording 
              ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
              : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
            }
            shadow-lg hover:shadow-xl transform hover:scale-105
            flex items-center justify-center
          `}
        >
          {isRecording ? (
            // Stop icon (square)
            <div className="w-8 h-8 bg-white rounded-sm" />
          ) : (
            // Microphone icon (simple version)
            <svg 
              className="w-10 h-10 text-white" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
              <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
            </svg>
          )}
        </button>

        {/* Recording Status */}
        <div className="text-center">
          {isRecording ? (
            <div className="space-y-2">
              <p className="text-red-400 font-semibold animate-pulse">
                Recording...
              </p>
              <p className="text-white text-2xl font-mono">
                {formatTime(recordingTime)}
              </p>
              <p className="text-gray-300 text-sm">
                Max: 30 seconds
              </p>
            </div>
          ) : (
            <p className="text-gray-300">
              Tap to start recording
            </p>
          )}
        </div>

        {/* Playback Section - Only show after recording */}
        {audioURL && !isRecording && (
          <div className="w-full mt-6 p-4 bg-white/5 rounded-lg">
            <p className="text-white mb-3 text-sm font-semibold">
              Your Recording:
            </p>
            <audio 
              controls 
              src={audioURL}
              className="w-full"
            >
              Your browser does not support the audio element.
            </audio>
            <p className="text-gray-400 text-xs mt-2">
              Recording stored locally (not sent anywhere yet)
            </p>
          </div>
        )}
      </div>
    </div>
  );
}