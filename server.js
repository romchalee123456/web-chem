const express = require('express');
    const path = require('path');
    const app = express();
    const port = 3000;

    const glassware = [
      {
        id: 1,
        name: 'Beaker',
        imageUrl: '/images/beaker.jpg'
      },
      {
        id: 2,
        name: 'Erlenmeyer Flask',
        imageUrl: '/images/flask.jpg'
      },
      {
        id: 3,
        name: 'Graduated Cylinder',
        imageUrl: '/images/cylinder.jpg'
      },
      {
        id: 4,
        name: 'Test Tube',
        imageUrl: '/images/testtube.jpg'
      },
      {
        id: 5,
        name: 'Burette',
        imageUrl: '/images/burette.jpg'
      },
      {
        id: 6,
        name: 'Pipette',
        imageUrl: '/images/pipette.jpg'
      }
    ];

    app.use('/images', express.static(path.join(__dirname, 'images')));

    app.get('/api/glassware', (req, res) => {
      res.json(glassware);
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
