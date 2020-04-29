import 'package:flutter/material.dart';

class SignupPage extends StatefulWidget {
  static String tag = 'siginup-page';
  @override
  _SignupPageState createState() => _SignupPageState();
}

class _SignupPageState extends State<SignupPage> {
  void _siginup() async {}
  final logo = Hero(
    tag: 'hero',
    child: CircleAvatar(
      backgroundColor: Colors.transparent,
      radius: 48.0,
      child: Icon(Icons.contacts, color: Colors.redAccent, size: 120),
    ),
  );

  final name = TextFormField(
    autofocus: false,
    style: TextStyle(color: Colors.redAccent, fontSize: 20),
    decoration: InputDecoration(
      hintText: 'name',
      hintStyle: TextStyle(color: Colors.redAccent, fontSize: 20),
      contentPadding: EdgeInsets.fromLTRB(20.0, 10.0, 20.0, 10.0),
      border: OutlineInputBorder(borderRadius: BorderRadius.circular(32.0)),
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

  final sigunpButton = Padding(
    padding: EdgeInsets.symmetric(vertical: 16.0),
    child: RaisedButton(
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(24),
      ),
      onPressed: () {},
      padding: EdgeInsets.all(12),
      color: Colors.redAccent,
      child: Text('Signup!', style: TextStyle(color: Colors.white, fontSize: 20)),
    ),
  );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.blueGrey[900],
      body: Center(
        child: ListView(
          shrinkWrap: true,
          padding: EdgeInsets.only(left: 24.0, right: 24.0),
          children: <Widget>[
            logo,
            SizedBox(height: 45),
            name,
            SizedBox(height: 8.0),
            email,
            SizedBox(height: 8.0),
            password,
            SizedBox(height: 8.0),
            sigunpButton
          ],
        ),
      ),
    );
  }
}
