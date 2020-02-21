<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="/">Dealer Blog</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav style="margin-left: auto">
                    <!-- if auth && admin -->
                    <b-nav-item href="/users">Users</b-nav-item>
                    
                    <b-nav-item href="/">Posts</b-nav-item>

                    <!-- if auth -->
                    <b-nav-item href="/posts/create">New Post</b-nav-item>

                    <!-- if auth -->
                    <b-nav-item href="/profile">Profile</b-nav-item>

                    <!-- if !auth -->
                    <b-nav-item href="/login">Login</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <b-container>
            <router-view></router-view>
        </b-container>
    </div>
</template>
