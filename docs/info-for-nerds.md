---
title: Additional Info (for nerds)
sidebar_position: 4
last_update:
  date: 2024-05-01T08:30-04:00
  author: Andrew Shaffer
---

## 30-day Uptimes

| [![Plex Uptime](https://uptime.shaffer.network/api/badge/10/uptime/720?labelPrefix=Plex+Uptime+&label=(30d)&style=for-the-badge)](https://status.shaffer.media/) | [![Overseerr Uptime](https://uptime.shaffer.network/api/badge/54/uptime/720?labelPrefix=Overseerr+Uptime+&label=(30d)&style=for-the-badge)](https://status.shaffer.media/) | [![qBittorrent Uptime](https://uptime.shaffer.network/api/badge/60/uptime/720?labelPrefix=qBittorrent+Uptime+&label=(30d)&style=for-the-badge)](https://status.shaffer.media/) |
|---|---|---|
| [![Radarr HD Uptime](https://uptime.shaffer.network/api/badge/122/uptime/720?labelPrefix=Radarr+HD+Uptime+&label=(30d)&style=for-the-badge)](https://status.shaffer.media/) | [![Sonarr HD Uptime](https://uptime.shaffer.network/api/badge/119/uptime/720?labelPrefix=Sonarr+HD+Uptime+&label=(30d)&style=for-the-badge)](https://status.shaffer.media/) | [![Prowlarr Uptime](https://uptime.shaffer.network/api/badge/124/uptime/720?labelPrefix=Prowlarr+Uptime+&label=(30d)&style=for-the-badge)](https://status.shaffer.media/) |
| [![Radarr 4K Uptime](https://uptime.shaffer.network/api/badge/121/uptime/720?labelPrefix=Radarr+4K+Uptime+&label=(30d)&style=for-the-badge)](https://status.shaffer.media/) | [![Sonarr 4K Uptime](https://uptime.shaffer.network/api/badge/120/uptime/720?labelPrefix=Sonarr+4K+Uptime+&label=(30d)&style=for-the-badge)](https://status.shaffer.media/) | [![Bazarr Uptime](https://uptime.shaffer.network/api/badge/58/uptime/720?labelPrefix=Bazarr+Uptime+&label=(30d)&style=for-the-badge)](https://status.shaffer.media/) |

## System Diagrams

### Movie Processing Using Overseerr

```mermaid
sequenceDiagram
  autonumber
  box Frontend
  actor User
  participant Overseerr
  participant Plex
  end
  actor Admin
  box Backend
  participant File Storage
  participant Radarr / 4K
  participant Prowlarr
  participant qBittorrent
  end
  User->>Overseerr: User requests a movie
  activate Overseerr
  Admin->>Overseerr: Admin approves request
  Overseerr-->>Radarr / 4K: Movie request sent to Radarr
  Radarr / 4K-->>Prowlarr: Radarr searches for torrent via Prowlarr
  Prowlarr-->>Radarr / 4K: Prowlarr returns search results
  Radarr / 4K-->>qBittorrent: Best result is sent to torrent client
  activate qBittorrent
  Note over qBittorrent,Radarr / 4K: Radarr polls torrent client for completed downloads
  qBittorrent-->>Radarr / 4K: Detects download complete
  deactivate qBittorrent
  Radarr / 4K-->>File Storage: Moves media to Plex directory
  File Storage-->>Plex: Plex scans library for new media
  Radarr / 4K-->>Overseerr: Overseerr is alerted of media availability
  Overseerr->>User: Notification sent
  deactivate Overseerr
  User->>Plex: User watches movie
```

### Series Processing Using Overseerr

```mermaid
sequenceDiagram
  autonumber
  box Frontend
  actor User
  participant Overseerr
  participant Plex
  end
  actor Admin
  box Backend
  participant File Storage
  participant Sonarr / 4K
  participant Prowlarr
  participant qBittorrent
  end
  User->>Overseerr: User requests a series
  Admin->>Overseerr: Admin approves request
  Overseerr-->>Sonarr / 4K: Series request sent to Sonarr
  Admin-->>Sonarr / 4K: Admin manually searches for seasons/episodes
  Prowlarr-->>Sonarr / 4K: Prowlarr returns search results
  Sonarr / 4K-->>qBittorrent: Chosen result is sent to torrent client
  activate qBittorrent
  Note over qBittorrent,Sonarr / 4K: Sonarr polls torrent client for completed downloads
  qBittorrent-->>Sonarr / 4K: Detects download complete
  deactivate qBittorrent
  Sonarr / 4K-->>File Storage: Moves media to Plex directory
  File Storage-->>Plex: Plex scans library for new media
  Sonarr / 4K-->>Overseerr: Overseerr is alerted of media availability
  Overseerr->>User: Notification sent<br/>(if ALL requested episodes available)
  User->>Plex: User watches show
  Sonarr / 4K-->>Prowlarr: Sonarr searches for new episodes
  Prowlarr-->>Sonarr / 4K: Prowlarr returns search results
  Sonarr / 4K-->>qBittorrent: Best result is sent to torrent client
  activate qBittorrent
  Note over qBittorrent,Sonarr / 4K: Sonarr polls torrent client for completed downloads
  qBittorrent-->>Sonarr / 4K: Detects download complete
  deactivate qBittorrent
  Sonarr / 4K-->>File Storage: Moves media to Plex directory
  File Storage-->>Plex: Plex scans library for new media
  Sonarr / 4K-->>Overseerr: Overseerr is alerted of media availability
  Overseerr->>User: Notification sent<br/>(if not notified earlier)
  User->>Plex: User watches latest episode
```
