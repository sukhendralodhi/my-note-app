/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
// import notes from "../../data/notes";
import { useEffect, useState } from "react";
import axios from 'axios';


const MyNotes = () => {

    const [notes, setNotes] = useState([]);
    // const deleteHandler = (id) => {
    //     if (window.confirm("Are you sure?")) {

    //     }
    // };

    const fetchNotes = async () => {
        const { data } = await axios.get('http://localhost:5000/api/notes');
        setNotes(data);
    }

    useEffect(() => {
        fetchNotes();
    }, []);

    console.log(notes);

    return (
        <MainScreen title="Welcome back sanju....">
            <Link to="createnote">
                <Button style={{ marginLeft: "10px", marginBottom: "6px" }} size="lg">Create New Note</Button>
            </Link>

            {
                notes.map((note) => {
                    const { _id, title, content, category } = note;
                    return (
                        <Accordion key={_id} defaultActiveKey={0} flush>
                            <Accordion.Item eventKey="0">
                                <Card style={{ margin: '10px' }}>
                                    <Card.Header style={{ display: 'flex' }}>
                                        <span
                                            style={{
                                                color: 'black',
                                                textDecoration: 'none',
                                                flex: 1,
                                                cursor: 'pointer',
                                                alignSelf: 'center',
                                                fontSize: 18,
                                            }}

                                        >
                                            <Accordion.Header>
                                                {title}
                                            </Accordion.Header>

                                        </span>
                                        <div>
                                            <Button href={`/note/${note._id}`}>Edit</Button>
                                            <Button variant="danger" className="mx-2">Delete</Button>
                                        </div>
                                    </Card.Header>
                                    <Accordion.Body eventKey="0">
                                        <Card.Body>
                                            <h4>
                                                <Badge variant="danger">
                                                    Category - {category}
                                                </Badge>
                                            </h4>
                                            <blockquote className="blockquote mb-0">
                                                <p>
                                                    {content}
                                                </p>
                                                <footer className="blockquote-footer">
                                                    Someone famous in <cite title="Source Title">{note.category}</cite>
                                                </footer>
                                            </blockquote>
                                        </Card.Body>
                                    </Accordion.Body>
                                </Card>
                            </Accordion.Item>
                        </Accordion>
                    );
                })
            }


        </MainScreen >
    )
}

export default MyNotes