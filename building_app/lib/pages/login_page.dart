import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:async';
import 'dart:convert';

import './signup_pages.dart';

const apiUrl = "http://localhost:3000/api";

class LoginPage extends StatefulWidget {
  static String tag = 'login-page';
  @override
  _LoginPageState createState() => new _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  void _login() async {}

  @override
  Widget build(BuildContext context) {
    final logo = Hero(
      tag: 'hero',
      child: CircleAvatar(
        backgroundColor: Colors.transparent,
        radius: 48.0,
        child: Icon(Icons.account_circle, color: Colors.redAccent, size: 120),
      ),
    );

    final email = TextFormField(
      keyboardType: TextInputType.emailAddress,
      autofocus: false,
      style: TextStyle(color: Colors.redAccent, fontSize: 20),
      decoration: InputDecoration(
        hintText: 'email',
        hintStyle: TextStyle(color: Colors.redAccent, fontSize: 20),
        contentPadding: EdgeInsets.fromLTRB(20.0, 10.0, 20.0, 10.0),
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(32.0)),
      ),
    );

    final password = TextFormField(
      autofocus: false,
      obscureText: true,
      style: TextStyle(color: Colors.redAccent, fontSize: 20),
      decoration: InputDecoration(
        hintText: 'password',
        hintStyle: TextStyle(color: Colors.redAccent, fontSize: 20),
        contentPadding: EdgeInsets.fromLTRB(20.0, 10.0, 20.0, 10.0),
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(32.0)),
      ),
    );

    final loginButton = Padding(
      padding: EdgeInsets.symmetric(vertical: 16.0),
      child: RaisedButton(
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(24),
        ),
        onPressed: () {},
        padding: EdgeInsets.all(12),
        color: Colors.redAccent,
        child:
            Text('Login!', style: TextStyle(color: Colors.white, fontSize: 20)),
      ),
    );

    final forgotLabel = FlatButton(
      child: Text(
        'don\'t have account',
        style: TextStyle(color: Colors.redAccent, fontSize: 20),
      ),
      onPressed: () {
        Navigator.of(context).pushNamed(SignupPage.tag);
      },
    );

    return Scaffold(
      backgroundColor: Colors.blueGrey[900],
      body: Center(
        child: ListView(
          shrinkWrap: true,
          padding: EdgeInsets.only(left: 24.0, right: 24.0),
          children: <Widget>[
            logo,
            SizedBox(height: 48.0),
            email,
            SizedBox(height: 8.0),
            password,
            SizedBox(height: 24.0),
            loginButton,
            forgotLabel
          ],
        ),
      ),
    );
  }
}
