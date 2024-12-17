import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useGetplayerbyiddetailsQuery } from '../../serviceslayer/playerApi'
import { useParams } from 'react-router-dom'

export default function Update() {
     var {id}=useParams()
      var {isLoading,data}= useGetplayerbyiddetailsQuery(id)
      console.log(isLoading,data)
    var initialValues={
           name:data?.name,
            role:data?.role,
            batting_style:data?.batting_style,
            bowling_style:data?. bowling_style,
            matches_played:data?.matches_played,
            international_debut_year:data?.international_debut_year,
            jersyno:data?.jersyno,
            attitude:data?.attitude,
    }
    var   onsubmit=((values)=>{
        console.log(values)
    })
  return (
    <div>
      <Formik  initialValues={initialValues} onSubmit={onsubmit}>
      <Form>
        <Field name='name'></Field><br />
        <Field name='role'></Field><br />
        <Field name='batting_style:data'></Field><br />
        <Field name='bowling_style:data'></Field><br />
        <Field name='matches_played'></Field><br />
        <Field name='international_debut_year'></Field><br />
        <Field name='jersyno'></Field><br />
        <Field name='attitude'></Field><br />
        <button>Submit</button>
      </Form>
      </Formik>
    </div>
  )
}

