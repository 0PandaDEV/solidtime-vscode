export function formatTimeSpent(totalTime: number): string {
  const hours = Math.floor(totalTime / (1000 * 60 * 60));
  const minutes = Math.floor((totalTime % (1000 * 60 * 60)) / (1000 * 60));
  return `${hours}h ${minutes}m`;
}

export function hasTimePassed(lastTime: number, currentTime: number): boolean {
  return lastTime + 120000 < currentTime;
}