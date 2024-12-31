// Improved error handling and data confirmation

firebase.database().ref('/data').set(newData).then(() => {
  // Success callback to confirm data is written
  console.log('Data written successfully!');
  // Optionally, read back the data to double-check
  firebase.database().ref('/data').once('value', (snapshot) => {
    console.log('Data read back:', snapshot.val());
  });
}).catch((error) => {
  // Handle errors appropriately
  console.error('Data write failed:', error);
  // Retry mechanism could be implemented here if needed
});