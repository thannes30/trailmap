class WelcomeController < ApplicationController

  def index
    trails = Trail.all
    @trail_start_markers = get_trail_start_markers(trails)
  end

  private

  def get_trail_start_markers(trails)
    trail_marker_coords = []
    trails.each do |trail|
      trail_marker = []
      latitude = trail.coords[0][0].to_f
      longitude = trail.coords[0][1].to_f
      trail_marker << latitude
      trail_marker << longitude
      trail_marker_coords << trail_marker
    end
    trail_marker_coords
  end


end
