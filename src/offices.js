const offices = [
    {
        id: 1,
        city: 'Milan',
        isAdded: false,
        rate: 200,
        description: 'Offices play a vital role in collaboration, creating an environment...', 
        image: 'https://images.unsplash.com/photo-1595895107207-44258d44837c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxhcHRvcCUyMGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 2,
        city: 'London',
        isAdded: false,
        rate: 115,
        description: 'Offices play a vital role in collaboration, creating an environment...',
        image: 'https://images.unsplash.com/photo-1556559322-b5071efadc88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk3fHx3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 3,
        city: 'Paris',
        isAdded: false,
        rate: 99,
        description: 'Offices play a vital role in collaboration, creating an environment...',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 4,
        city: 'Beirut',
        isAdded: false,
        rate: 215,
        description: 'Offices play a vital role in collaboration, creating an environment...',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 5,
        city: 'Tokyo',
        isAdded: false,
        rate: 400,
        description: 'Offices play a vital role in collaboration, creating an environment...',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 6,
        city: 'Rome',
        isAdded: false,
        rate: 150,
        description: 'Offices play a vital role in collaboration, creating an environment...',
        image: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 7,
        city: 'Beijing',
        isAdded: false,
        rate: 199,
        description: 'Offices play a vital role in collaboration, creating an environment...',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 8,
        city: 'Copenhagen',
        isAdded: false,
        rate: 220,
        description: 'Offices play a vital role in collaboration, creating an environment...',
        image: 'https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 9,
        city: 'Berlin',
        isAdded: false,
        rate: 500,
        description: 'Offices play a vital role in collaboration, creating an environment...',
        image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 10,
        city: 'Manchester',
        isAdded: false,
        rate: 165,
        description: 'Offices play a vital role in collaboration, creating an environment...',
        image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 11,
        city: 'Kiev',
        isAdded: false,
        rate: 300,
        description: 'Offices play a vital role in collaboration, creating an environment...',
        image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 12,
        city: 'New York',
        isAdded: false,
        rate: 410,
        description: 'Offices play a vital role in collaboration, creating an environment...',
        image: 'https://images.unsplash.com/photo-1498409785966-ab341407de6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 13,
        city: 'Stockholm',
        isAdded: false,
        rate: 255,
        description: 'Offices play a vital role in collaboration, creating an environment...',
        image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEyfHx3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 14,
        city: 'Los Angeles',
        isAdded: false,
        rate: 305,
        description: 'Offices play a vital role in collaboration, creating an environment...',
        image: 'https://images.unsplash.com/photo-1575318634028-6a0cfcb60c59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMyfHx3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 15,
        city: 'Chicago',
        isAdded: false,
        rate: 205,
        description: 'Offices play a vital role in collaboration, creating an environment...',
        image: 'https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM3fHx3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 16,
        city: 'Boston',
        isAdded: false,
        rate: 450,
        description: 'Offices play a vital role in collaboration, creating an environment...',
        image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQxfHx3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
];

export default offices;