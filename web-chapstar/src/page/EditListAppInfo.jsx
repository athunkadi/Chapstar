import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

export default function EditListAppInfo() {
    let history = useHistory();
    const {id} = useParams();
    const [data, setData] = useState({
        nama_aplikasi: "",
        keterangan: "",
        jumlah_pengguna: 0,
        pendiri: "",
        tanggal_didirikan: ""
    })

    useEffect(() => {
        loadData();
    }, []) 

    const { nama_aplikasi, keterangan, jumlah_pengguna, pendiri, tanggal_didirikan } = data;
    const onChange = e => {
        setData({ ...data, [e.target.name]: e.target.value})
    };

    const onSubmit = async e => {
        e.preventDefault();

        await axios.put(`http://localhost:3000/api/aplikasi/${id}`, data);
        history.push('/')
    }

    const loadData = async () => {
        const result = await axios.get(`http://localhost:3000/api/aplikasi/${id}`);
        setData(result.data)
    }

    return(
        <>
            <div className="container">
                <h2>Tambah List Sosial Media</h2>
                <div className="form-group" style={{maxWidth: "540px"}}>
                <form onSubmit={e => onSubmit(e)}>
                    <label>Nama Aplikasi</label>
                    <input className="form-control" type="text" name="nama_aplikasi" value={nama_aplikasi} onChange={e => onChange(e)}></input>
                    <label>Keterangan</label>
                    <input className="form-control" type="text" name="keterangan" value={keterangan} onChange={e => onChange(e)}></input>
                    <label>Jumlah Pengguna</label>
                    <input className="form-control" type="number" name="jumlah_pengguna" value={jumlah_pengguna} onChange={e => onChange(e)}></input>
                    <label>Pendiri</label>
                    <input className="form-control" type="text" name="pendiri" value={pendiri} onChange={e => onChange(e)}></input>
                    <label>Tanggal Didirikan</label>
                    <input className="form-control" type="text" name="tanggal_didirikan" value={tanggal_didirikan} onChange={e => onChange(e)}></input>
                    <button className="btn-primary">Edit</button>
                </form>
                </div>
                
            </div>
        </>
    )
}