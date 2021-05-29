const { AppInfo } = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class AppInfoController {

    // ambil semua data aplikasi
    static getAlldata (req, res) {
        console.log(req.query.pendiri);
        let query = req.query.pendiri;
        if(req.query.pendiri) {
            
            AppInfo.findAll({
                where : {"pendiri": {
                    [Op.like] : '%'+query+'%',
                }},
                order: [
                ['id', 'ASC'],
            ]
            })
                .then(result => {
                    res.status(200).json(result);
                })
                .catch(err => {
                    res.status(500).json(err);
                })
        } else {

            AppInfo.findAll({
                order: [
                ['id', 'ASC'],
            ]
            })
                .then(result => {
                    res.status(200).json(result);
                })
                .catch(err => {
                    res.status(500).json(err);
                })
        }
        
    }

    // cari by id
    static findId (req, res) {
        const idApp = +req.params.id;

        AppInfo.findOne({ where : {id: idApp}})
            .then(data => {

                if(data) {
                    res.status(200).json(data);
                } else {
                    res.status(404).json({"error": "App Not Found"});
                }
                
            })
            .catch(err => {
                res.status(500).json(err);
            })
    }

    // tambah data aplikasi
    static createApp (req, res) {
        let obj = {
            nama_aplikasi: req.body.nama_aplikasi,
            keterangan: req.body.keterangan,
            jumlah_pengguna: req.body.jumlah_pengguna,
            pendiri: req.body.pendiri,
            tanggal_didirikan: req.body.tanggal_didirikan
        }
        AppInfo.create(obj)
            .then(data => {
                res.status(201).json(data);
            })
            .catch(err => {
                res.status(401).json({msg: err.errors[0].message});
            })
    }

    // edit data
    static update(req, res){
        const idApp = +req.params.id;

        const obj = {
            nama_aplikasi: req.body.nama_aplikasi,
            keterangan: req.body.keterangan,
            jumlah_pengguna: req.body.jumlah_pengguna,
            pendiri: req.body.pendiri,
            tanggal_didirikan: req.body.tanggal_didirikan
        }
        
        AppInfo.update(obj, { where : {'id' : idApp}, returning: true})
          .then(data => {
            res.status(200).json(data[1]);
          })
          .catch(err => {
            res.status(401).json({msg: err.errors[0].message})
          })
      }
    
    // delete data
    static delete(req, res) {
        const idApp = +req.params.id;
    
        AppInfo.destroy({ where : {'id': idApp}})
          .then(data => {
            res.status(200).json({name : data.name, msg : 'Delete Success'});
          })
          .catch(err => {
            res.status(500).json({msg: err.errors[0].message})
          })
    }   
}

module.exports = AppInfoController;