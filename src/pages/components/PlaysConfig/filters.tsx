/*

Billing Manager
Billing Admin
Pharmacist
Head Pharmacist
Receiptionist
Chief Administration Officer
Project Manager
Director of Project Management
Chief Strategy Officer
Procurement Officer
Procurement Manager
Head of Direct Procurement
Chief Procurement Officer
Technology Sourcing
Admin Sourcing
Head of Indirect Procurement
Finance Manager
Director of Finance
Treasury Manager
Head of Treasury
Security Engineer 
Software Engineer
QA Engineer 
Director of Engineering 
Product Manager
Growth Product Manager 
Head of Product Management 
Head of Growth
Product Marketing Manager 
Marketing Manager 
Head of Marketing 
Head of Sales 
Account Executive
Head of Inside Sales 
Sales Development Rep
Head of Customer Success
Customer Success Manager
Chief Revenue Officer 

*/

const personas = [
    "Billing Manager",
    "Billing Admin",
    "Pharmacist",
    "Head Pharmacist",
    "Receiptionist",
    "Chief Administration Officer",
    "Project Manager",
    "Director of Project Management",
    "Chief Strategy Officer",
    "Procurement Officer",
    "Procurement Manager",
    "Head of Direct Procurement",
    "Chief Procurement Officer",
    "Technology Sourcing",
    "Admin Sourcing",
    "Head of Indirect Procurement",
    "Finance Manager",
    "Director of Finance",
    "Treasury Manager",
    "Head of Treasury",
    "Security Engineer",
    "Software Engineer",
    "QA Engineer",
    "Director of Engineering",
    "Product Manager",
    "Growth Product Manager",
    "Head of Product Management",
    "Head of Growth",
    "Product Marketing Manager",
    "Marketing Manager",
    "Head of Marketing",
    "Head of Sales",
    "Account Executive",
    "Head of Inside Sales",
    "Sales Development Rep",
    "Head of Customer Success",
    "Customer Success Manager",
    "Chief Revenue Officer",
].sort();

export const getTreeData = () => {
    const treeData = [
        {
            title: 'Type',
            value: '0-0',
            key: '0-0',
            selectable: false,
            checkable: false,
            children: [
                {
                    title: 'Enterprise',
                    value: '0-0-0',
                    key: '0-0-0',
                },
                {
                    title: 'Non-Enterprise',
                    value: '0-0-1',
                    key: '0-0-1',
                },
            ],
        },
        {
            title: 'Country',
            value: '0-1',
            key: '0-1',
            selectable: false,
            checkable: false,
            children: [
                {
                    title: 'United States',
                    value: '0-1-0',
                    key: '0-1-0',
                },
                {
                    title: 'United Kingdom',
                    value: '0-1-1',
                    key: '0-1-1',
                },
                {
                    title: 'Switzerland',
                    value: '0-1-2',
                    key: '0-1-2',
                },
            ],
        },
        {
            title: 'Persona',
            value: '0-2',
            key: '0-2',
            selectable: false,
            checkable: false,
            children: personas.map((persona, i) => {
                return {
                    title: persona,
                    value: `0-2-${i}`,
                    key: `0-2-${i}`,
                }
            })
        },
    ];
    return treeData;
}      