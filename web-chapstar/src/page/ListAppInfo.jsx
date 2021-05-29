import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ListAppInfo() {
    const [data, setData] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const result = await axios.get(`http://localhost:3000/api/aplikasi`);
        setData(result.data);
    }

    const deleteData = async id => {
        await axios.delete(`http://localhost:3000/api/aplikasi/${id}`);
        loadData();
    }
    
    return(
        <div>
            <Link to='/addPage'>
                <button type="button" className="btn btn-light" style={{marginBottom: "1rem", marginTop: "1rem"}}>Tambah Aplikasi</button>
            </Link>

            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Nama Aplikasi</th>
                    <th scope="col">Keterangan</th>
                    <th scope="col">Jumlah Pengguna</th>
                    <th scope="col">Pendiri</th>
                    <th scope="col">Tanggal Didirikan</th>
                    <th scope="col">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    { data.map ( (data, idx) => {
                        return (
                            <tr key={idx}>
                                <th scope="row">{data.nama_aplikasi}</th>
                                <td>{data.keterangan}</td>
                                <td>{data.jumlah_pengguna}</td>
                                <td>{data.pendiri}</td>
                                <td>{data.tanggal_didirikan}</td>
                                <td>
                                <Link type="button" className="btn btn-primary" style={{marginRight: "1rem"}} to={`/editPage/${data.id}`}>Edit</Link>
                                
                                <Link type="button" className="btn btn-primary" onClick={() => deleteData(data.id)}>Hapus</Link>
                                
                                </td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>

            {/* <Link to='/viewDoc'>
                <button type="button" className="btn btn-light" style={{marginBottom: "1rem", marginTop: "1rem"}}>View as Document</button>
            </Link> */}
        </div>
    )
}