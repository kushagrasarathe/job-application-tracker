import { applications } from "../../src/data/applications"

export default function handler(req, res) {
  if(req.method === 'GET'){
    res.status(200).json(applications);
  } else if(req.method === 'POST'){
    const company = req.body.company;
    const position = req.body.position;
    const contact = req.body.contact;
    const remark = req.body.remark;
    const link = req.body.link;
    const date = req.body.date;
    const status = req.body.status;

    const newApplication = {
        id: Date.now,
        company: company,
        position: position,
        contact: contact,
        remark: remark,
        link: link,
        date: date,
        status: status
    };

    applications.push(newApplication);
    res.status(201).json(newApplication);
  }
}