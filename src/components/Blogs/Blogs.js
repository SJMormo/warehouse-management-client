import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-center mt-3'>Blogs</h2>

            <Accordion className='w-50 mx-auto mt-3' defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between `javascript` and `NodeJS`</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>JavaScript is a programming language that runs in any browser JavaScript Engine. Node JS, on the other hand, is a JavaScript interpreter or operating environment.</li>
                            <li>For one online application, JavaScript is typically utilized for any client-side activities. Node JS, on the other hand, is mostly used for non-blocking operations on any operating system. A shell script creation or execution operation.</li>
                            <li>JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome). But Node JS only run in a V8 engine which mainly used by google chrome.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>When should you use `node js` and when should you use `mongodb`</Accordion.Header>
                    <Accordion.Body>
                        NodeJS and MongoDB are two different technologies. Node JS is a JavaScript interpreter or operating environment and MongoDB is a database system which gives one a chance to efficiently store documents. So when one need to develop server for a website he/she can use NodeJS. And, In order to store data one can use MongoDB.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Differences between SQL and NoSQL databases.</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>
                                Relational databases are SQL, while non-relational databases are NoSQL.
                            </li>
                            <li>
                                SQL databases have a specified schema and use structured query language. For unstructured data, NoSQL databases use dynamic schemas.
                            </li>
                            <li>
                                SQL databases scale vertically, but NoSQL databases scale horizontally.
                            </li>
                            <li>
                                NoSQL databases are document, key-value, graph, or wide-column stores, whereas SQL databases are table-based.
                            </li>
                            <li>
                                SQL databases excel in multi-row transactions, while NoSQL excels at unstructured data like documents and JSON.
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;