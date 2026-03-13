#!/bin/bash
cd "$(dirname "$0")"
npm run build && npx firebase deploy
echo "Naciśnij Enter aby zamknąć..."
read
