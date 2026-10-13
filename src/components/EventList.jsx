const events =[
    {
        id: 1,
        title: "JavaScript Workshop",
        date: "2026-10-19",
        location: "Erfurt",
        eventType: "Workshop",
        seats: 12,
        online: false
    },
    {
        id: 2,
        title: "React Grundlagen",
        date: "2026-10-22",
        location: "Online",
        eventType: "Webinar",
        seats: 20,
        online: true
    },
    {
        id: 3,
        title: "Frontend Meetup",
        date: "2026-10-26",
        location: "Jena",
        eventType: "Meetup",
        seats: 0,
        online: false
    },
    {
        id: 4, // <--- Geändert von 3 auf 4!
        title: "Angeln",
        date: "2026-10-28",
        location: "Alter Fischereihof Oelzschau",
        eventType: "Meetup",
        seats: 25,
        online: false
    }
];

export default events;