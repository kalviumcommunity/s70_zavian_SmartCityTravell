
import React, { useState } from 'react';
import { Calendar, Clock, DollarSign, Plus, Trash2, Share2, PrinterIcon, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { generateItinerary } from '../services/cityService';
import { Itinerary, UserPreference, CustomAttraction, ItineraryDay } from '../types';
import { useToast } from '@/components/ui/use-toast';
import { format, addDays } from 'date-fns';

interface ItineraryPlannerProps {
  cityId: string;
  cityName: string;
}

const ItineraryPlanner = ({ cityId, cityName }: ItineraryPlannerProps) => {
  const [days, setDays] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [startDate, setStartDate] = useState<string>('');
  const [customAttraction, setCustomAttraction] = useState<CustomAttraction>({
    name: '',
    description: '',
    image: '/placeholder.svg',
  });
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [dayNotes, setDayNotes] = useState<{ [key: number]: string }>({});
  const { toast } = useToast();

  const preferences: UserPreference[] = [
    { category: 'Culture', level: 3 },
    { category: 'Food', level: 4 },
    { category: 'Architecture', level: 3 }
  ];

  const handleGenerateItinerary = async () => {
    setIsLoading(true);
    try {
      const generatedItinerary = await generateItinerary(cityId, days, preferences);
      
      // Add start date and end date if specified
      if (startDate) {
        const start = new Date(startDate);
        generatedItinerary.startDate = start;
        generatedItinerary.endDate = addDays(start, days - 1);
        generatedItinerary.title = `${cityName} Trip: ${format(start, 'MMM d')} - ${format(generatedItinerary.endDate, 'MMM d, yyyy')}`;
      } else {
        generatedItinerary.title = `${cityName} ${days}-Day Itinerary`;
      }
      
      setItinerary(generatedItinerary);
      toast({
        title: "Itinerary created!",
        description: `Your ${days}-day itinerary has been generated.`,
      });
    } catch (error) {
      console.error('Error generating itinerary:', error);
      toast({
        title: "Error",
        description: "Failed to generate itinerary. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const addCustomAttraction = () => {
    if (!itinerary || !customAttraction.name) return;
    
    // Add custom category if not provided
    if (!customAttraction.category) {
      customAttraction.category = 'Custom';
    }
    
    // Clone the current itinerary
    const updatedItinerary = { ...itinerary };
    
    // Find the day to add the custom attraction to
    const dayIndex = updatedItinerary.days.findIndex(d => d.day === selectedDay);
    if (dayIndex !== -1) {
      // Initialize customAttractions array if it doesn't exist
      if (!updatedItinerary.days[dayIndex].customAttractions) {
        updatedItinerary.days[dayIndex].customAttractions = [];
      }
      
      // Add the custom attraction
      updatedItinerary.days[dayIndex].customAttractions?.push({...customAttraction});
      
      // Update the itinerary
      setItinerary(updatedItinerary);
      
      // Reset the custom attraction form
      setCustomAttraction({
        name: '',
        description: '',
        image: '/placeholder.svg',
      });
      
      toast({
        title: "Custom attraction added!",
        description: `"${customAttraction.name}" added to Day ${selectedDay}.`,
      });
    }
  };
  
  const removeCustomAttraction = (dayIndex: number, attractionIndex: number) => {
    if (!itinerary) return;
    
    // Clone the current itinerary
    const updatedItinerary = { ...itinerary };
    
    // Make sure the day and custom attractions exist
    if (updatedItinerary.days[dayIndex].customAttractions) {
      const attractionName = updatedItinerary.days[dayIndex].customAttractions?.[attractionIndex].name;
      
      // Remove the attraction
      updatedItinerary.days[dayIndex].customAttractions = 
        updatedItinerary.days[dayIndex].customAttractions?.filter((_, i) => i !== attractionIndex);
      
      // Update the itinerary
      setItinerary(updatedItinerary);
      
      toast({
        title: "Custom attraction removed",
        description: `"${attractionName}" removed from Day ${dayIndex + 1}.`,
      });
    }
  };
  
  const updateDayNotes = (day: number, notes: string) => {
    setDayNotes({...dayNotes, [day]: notes});
    
    if (!itinerary) return;
    
    // Clone the current itinerary
    const updatedItinerary = { ...itinerary };
    
    // Find the day to update
    const dayIndex = updatedItinerary.days.findIndex(d => d.day === day);
    if (dayIndex !== -1) {
      // Add notes to the day
      updatedItinerary.days[dayIndex].notes = notes;
      
      // Update the itinerary
      setItinerary(updatedItinerary);
    }
  };
  
  const printItinerary = () => {
    if (!itinerary) return;
    
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    
    // Start building HTML content
    let htmlContent = `
      <html>
      <head>
        <title>${itinerary.title || `${cityName} Itinerary`}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; }
          h1 { color: #333; }
          h2 { color: #555; margin-top: 30px; }
          .day { margin-bottom: 30px; border-bottom: 1px solid #eee; padding-bottom: 20px; }
          .activity { margin-bottom: 15px; }
          .activity-title { font-weight: bold; }
          .activity-detail { color: #777; font-size: 0.9em; }
          .custom-attraction { background-color: #f9f9f9; padding: 10px; margin: 10px 0; border-left: 3px solid #4A90E2; }
          .notes { font-style: italic; background-color: #fff9e6; padding: 10px; margin-top: 15px; }
          @media print {
            .no-print { display: none; }
            body { margin: 0; }
          }
        </style>
      </head>
      <body>
        <div class="no-print" style="text-align: right; margin-bottom: 20px;">
          <button onclick="window.print()">Print</button>
        </div>
        <h1>${itinerary.title || `${cityName} Itinerary`}</h1>
    `;
    
    // Add date information if available
    if (itinerary.startDate && itinerary.endDate) {
      htmlContent += `<p>Date: ${format(itinerary.startDate, 'MMMM d')} - ${format(itinerary.endDate, 'MMMM d, yyyy')}</p>`;
    }
    
    // Add days
    itinerary.days.forEach(day => {
      htmlContent += `
        <div class="day">
          <h2>Day ${day.day}${itinerary.startDate ? ` - ${format(addDays(itinerary.startDate, day.day - 1), 'EEEE, MMMM d')}` : ''}</h2>
      `;
      
      // Morning activity
      if (day.morningActivity) {
        htmlContent += `
          <div class="activity">
            <div class="activity-title">Morning: ${day.morningActivity.name}</div>
            <div class="activity-detail">${day.morningActivity.description}</div>
            ${day.morningActivity.price ? `<div class="activity-detail">Price: ${day.morningActivity.price}</div>` : ''}
            ${day.morningActivity.duration ? `<div class="activity-detail">Duration: ${day.morningActivity.duration}</div>` : ''}
          </div>
        `;
      }
      
      // Afternoon activity
      if (day.afternoonActivity) {
        htmlContent += `
          <div class="activity">
            <div class="activity-title">Afternoon: ${day.afternoonActivity.name}</div>
            <div class="activity-detail">${day.afternoonActivity.description}</div>
            ${day.afternoonActivity.price ? `<div class="activity-detail">Price: ${day.afternoonActivity.price}</div>` : ''}
            ${day.afternoonActivity.duration ? `<div class="activity-detail">Duration: ${day.afternoonActivity.duration}</div>` : ''}
          </div>
        `;
      }
      
      // Evening activity
      if (day.eveningActivity) {
        htmlContent += `
          <div class="activity">
            <div class="activity-title">Evening: ${day.eveningActivity.name}</div>
            <div class="activity-detail">${day.eveningActivity.description}</div>
            ${day.eveningActivity.price ? `<div class="activity-detail">Price: ${day.eveningActivity.price}</div>` : ''}
            ${day.eveningActivity.duration ? `<div class="activity-detail">Duration: ${day.eveningActivity.duration}</div>` : ''}
          </div>
        `;
      }
      
      // Custom attractions
      if (day.customAttractions && day.customAttractions.length > 0) {
        htmlContent += `<h3>Custom Activities</h3>`;
        day.customAttractions.forEach(attraction => {
          htmlContent += `
            <div class="custom-attraction">
              <div class="activity-title">${attraction.name} ${attraction.time ? `(${attraction.time})` : ''}</div>
              <div class="activity-detail">${attraction.description}</div>
            </div>
          `;
        });
      }
      
      // Notes
      if (day.notes) {
        htmlContent += `
          <div class="notes">
            <strong>Notes:</strong> ${day.notes}
          </div>
        `;
      }
      
      htmlContent += `</div>`;
    });
    
    // Add total cost if available
    if (itinerary.totalCost) {
      htmlContent += `<p><strong>Estimated Total Cost:</strong> ${itinerary.totalCost}</p>`;
    }
    
    // Close the HTML
    htmlContent += `
        <div class="no-print" style="margin-top: 30px; text-align: center; color: #888; font-size: 0.8em;">
          Generated by India Explorer
        </div>
      </body>
      </html>
    `;
    
    // Write the content to the new window and print
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <h3 className="font-display font-semibold text-xl mb-4">Plan Your Itinerary</h3>

      <div className="mb-6">
        <div className="mb-4">
          <label htmlFor="startDate" className="text-sm font-medium mb-1 block">
            Trip Start Date (Optional)
          </label>
          <Input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mb-2"
          />
        </div>

        <div className="flex justify-between items-center mb-2">
          <label htmlFor="days" className="text-sm font-medium">
            Number of Days: {days}
          </label>
        </div>
        <Slider
          id="days"
          min={1}
          max={7}
          step={1}
          value={[days]}
          onValueChange={(value) => setDays(value[0])}
          className="mb-4"
        />
        
        <Button 
          onClick={handleGenerateItinerary} 
          disabled={isLoading} 
          className="w-full"
        >
          {isLoading ? 'Generating...' : 'Generate AI Itinerary'}
        </Button>
      </div>

      {itinerary && (
        <div className="border-t pt-4 animate-fade-in">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-display font-semibold text-lg">
              {itinerary.title || `Your ${days}-Day Itinerary`}
            </h4>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={printItinerary}
                title="Print Itinerary"
              >
                <PrinterIcon className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                title="Share Itinerary"
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {itinerary.startDate && (
            <p className="text-sm text-cityGray mb-4">
              {format(itinerary.startDate, 'MMMM d')} - {format(itinerary.endDate || addDays(itinerary.startDate, days - 1), 'MMMM d, yyyy')}
            </p>
          )}
          
          {itinerary.days.map((day) => (
            <div key={day.day} className="mb-4 pb-4 border-b last:border-0">
              <h5 className="font-semibold mb-2 flex items-center justify-between">
                <span>Day {day.day} {itinerary.startDate && (
                  <span className="font-normal text-sm text-cityGray ml-2">
                    {format(addDays(itinerary.startDate, day.day - 1), 'EEEE, MMM d')}
                  </span>
                )}</span>
              </h5>
              
              {day.morningActivity && (
                <div className="flex items-start mb-2">
                  <div className="bg-blue-50 p-2 rounded-full mr-3">
                    <Clock className="h-4 w-4 text-cityBlue" />
                  </div>
                  <div>
                    <span className="text-sm text-cityGray">Morning</span>
                    <p className="font-medium">{day.morningActivity.name}</p>
                  </div>
                </div>
              )}
              
              {day.afternoonActivity && (
                <div className="flex items-start mb-2">
                  <div className="bg-amber-50 p-2 rounded-full mr-3">
                    <Calendar className="h-4 w-4 text-amber-500" />
                  </div>
                  <div>
                    <span className="text-sm text-cityGray">Afternoon</span>
                    <p className="font-medium">{day.afternoonActivity.name}</p>
                  </div>
                </div>
              )}
              
              {day.eveningActivity && (
                <div className="flex items-start mb-2">
                  <div className="bg-purple-50 p-2 rounded-full mr-3">
                    <Clock className="h-4 w-4 text-cityPurple" />
                  </div>
                  <div>
                    <span className="text-sm text-cityGray">Evening</span>
                    <p className="font-medium">{day.eveningActivity.name}</p>
                  </div>
                </div>
              )}
              
              {/* Custom attractions */}
              {day.customAttractions && day.customAttractions.length > 0 && (
                <div className="mt-3 pl-9">
                  <h6 className="text-sm font-medium mb-2">Custom Activities:</h6>
                  {day.customAttractions.map((attraction, idx) => (
                    <div key={idx} className="flex items-start mb-2 border-l-2 border-cityBlue pl-2">
                      <div className="flex-1">
                        <p className="font-medium text-sm">{attraction.name} {attraction.time && <span className="text-xs text-cityGray">({attraction.time})</span>}</p>
                        <p className="text-xs text-cityGray">{attraction.description}</p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-6 w-6 p-0" 
                        onClick={() => removeCustomAttraction(day.day - 1, idx)}
                      >
                        <Trash2 className="h-3 w-3 text-red-500" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Day notes */}
              {day.notes && (
                <div className="mt-2 pl-9 text-sm italic text-cityGray bg-gray-50 p-2 rounded">
                  <strong>Notes:</strong> {day.notes}
                </div>
              )}
              
              {/* Day actions */}
              <div className="mt-2 pl-9 flex gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="text-xs">
                      <Plus className="h-3 w-3 mr-1" />
                      Add Activity
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add Custom Activity to Day {day.day}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-3 py-2">
                      <div>
                        <label htmlFor="attractionName" className="text-sm font-medium block mb-1">Name</label>
                        <Input 
                          id="attractionName"
                          value={customAttraction.name}
                          onChange={(e) => setCustomAttraction({...customAttraction, name: e.target.value})}
                          placeholder="Museum visit, Lunch at local restaurant, etc."
                        />
                      </div>
                      <div>
                        <label htmlFor="attractionTime" className="text-sm font-medium block mb-1">Time (Optional)</label>
                        <Input 
                          id="attractionTime"
                          value={customAttraction.time || ''}
                          onChange={(e) => setCustomAttraction({...customAttraction, time: e.target.value})}
                          placeholder="10:00 AM, Afternoon, etc."
                        />
                      </div>
                      <div>
                        <label htmlFor="attractionDesc" className="text-sm font-medium block mb-1">Description</label>
                        <Textarea 
                          id="attractionDesc"
                          value={customAttraction.description}
                          onChange={(e) => setCustomAttraction({...customAttraction, description: e.target.value})}
                          placeholder="Brief description of the activity"
                          rows={3}
                        />
                      </div>
                      <Button 
                        onClick={() => {
                          setSelectedDay(day.day);
                          addCustomAttraction();
                        }}
                        disabled={!customAttraction.name}
                        className="w-full"
                      >
                        Add to Itinerary
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="text-xs">
                      Add Notes
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Notes for Day {day.day}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-3 py-2">
                      <Textarea 
                        value={dayNotes[day.day] || day.notes || ''}
                        onChange={(e) => updateDayNotes(day.day, e.target.value)}
                        placeholder="Add any notes, reminders, or special instructions for this day"
                        rows={5}
                      />
                      <Button 
                        onClick={() => updateDayNotes(day.day, dayNotes[day.day] || '')}
                        className="w-full"
                      >
                        Save Notes
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
          
          {itinerary.totalCost && (
            <div className="flex items-center text-cityGray mt-2">
              <DollarSign className="h-4 w-4 mr-1" />
              <span>Estimated cost: {itinerary.totalCost}</span>
            </div>
          )}
          
          <Button variant="outline" className="w-full mt-4">
            Save Itinerary
          </Button>
        </div>
      )}
    </div>
  );
};

export default ItineraryPlanner;
