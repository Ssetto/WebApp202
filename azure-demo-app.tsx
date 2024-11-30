import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AzureDeploymentDemo = () => {
  const [timestamp, setTimestamp] = useState(new Date().toLocaleString());
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimestamp(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const incrementCounter = () => {
    setCounter(prev => prev + 1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-96 text-center">
        <CardHeader>
          <CardTitle>Azure Deployment Demo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>Current Time: {timestamp}</p>
            <p>Button Clicks: {counter}</p>
            <Button 
              onClick={incrementCounter} 
              className="w-full"
            >
              Increment Counter
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AzureDeploymentDemo;
